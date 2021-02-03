import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Fire from '../fire';
import Jumbotron from './Jumbotron';

const Contacts = (props) => {    

    var db = Fire.database().ref();

    var [contactObjects, setContactObjects] = useState({});

    var [currentId, setCurrentId] = useState('');

    useEffect(() => {
        //Svaki put kad se u cvoru contact desi crud operation, 
        //preko snapshot-a kupimo tu promenu i setujemo na state
        db.child('contacts').on('value', snapshot => {
            //vraca niz objekata
            if(snapshot.val()!=null){
                setContactObjects({
                    ...snapshot.val()
                })
            } else {
                setContactObjects({
                })
            }
        })
    }, []); //Similar to componentDidMount

    

    const addTest = () => {
        var newMessageRef = db.push();
        newMessageRef.set({
        'user_id': 'ada',
        'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
        });
        // We've appended a new message to the message_list location.
        var path = newMessageRef.toString();
        console.log(path);
    };

    

    const addOrEdit = obj => {
        if(currentId==''){
            db.child('contacts').push(
                obj, 
                err => {
                    if(err){
                        console.log(err)
                    } else {
                        setCurrentId('');
                    }
                }
            )
        } else {
            db.child(`contacts/${currentId}`).set(
                obj, 
                err => {
                    if(err){
                        console.log(err)
                    } else {
                        setCurrentId('');
                    }
                }
            )
        }
    }

    const onDelete = key => {
        if(window.confirm("Are you sure to delete this record?")){
            db.child(`contacts/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    } else {
                        setCurrentId('');
                    }
                }
            )
        }
    }

    return (
        <React.Fragment>
        <Jumbotron>Contact Register</Jumbotron>
        <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({addOrEdit, currentId, contactObjects})} addTest={addTest}/>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // vraca sve key-eve contactObjects-a
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}> 
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td>
                                            <a className="btn btn-primary" onClick={() => {setCurrentId(id)}}>
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                            <a className="btn btn-danger" onClick={() => {onDelete(id)}}>
                                                <i className="fa fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
        );
};

export default Contacts;
