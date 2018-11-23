import React, {Component} from 'react';
import { firebaseApp } from '../firebase';
// import {firebase} from '../firebase';
import * as firebase from 'firebase';
// import {Link} from 'react-router-dom';

class ForgotPassword extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

    sendForgotEmail() {
        var auth = firebase.auth();
        var emailAddress = this.state.email;
        auth.sendPasswordResetEmail(emailAddress).then(function() {
            console.log('email send successfully');
        }).catch(function(error){
            console.log('error type in sendPasswordResetEmail',error);
        })
    }

    render() {
        console.log('inside ForgotPassword');
        return(
            <div className="form-inline">
                <h2>Forgot ForgotPassword</h2>
                <div className="form-group">
                    <h4>Enter Email Address</h4>
                    <input 
                        className="form-control"
                        style = {{margin: '5px'}}
                        type="text"
                        placeholder="email"
                        onChange = { event => this.setState({ email : event.target.value }) }
                    />
                    <button
                        className="btn btn-sm btn-primary"
                        onClick = { ()=> this.sendForgotEmail() }
                    >
                        Send Reset Email
                    </button>

                </div>
            </div>
        )
    }

}

export default ForgotPassword;