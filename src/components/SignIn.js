import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
// import ForgotPassword from './ForgotPassword';

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        console.log('inside sign in');
        // console.log('this.state', this.state);
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch( error => {
            this.setState({error})
        } )
        console.log('sign in complete');
    }

    // forgotPassword() {
    //     console.log('inside forgotPassword');
    //     var auth = firebase.auth();
    //     var emailAddress = this.state.email;

    //     auth.sendPasswordResetEmail(emailAddress).then(function() {
    //         console.log('email sent');
    //     }).catch(function(error){
    //         console.log('error in sendPasswordResetEmail');
    //     })
    // }

    render() {
        return(
            <div className="form-inline">
                <h2>SignIn</h2>
                <button
                    type="button"
                    className="btn btn-primary"
                >
                    <Link to = {'/firstpage'}
                        style = {{color:'black'}}
                    > Add Team Goals 
                    </Link>
                </button>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange = { event => this.setState({ email: event.target.value }) }
                    />
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange = { event => this.setState({ password: event.target.value }) }
                    />
                    <button
                        className="btn btn-primary"
                        style={{margin: '5px'}}
                        type="button"
                        onClick = { ()=> this.signIn() }
                    >
                        Sign In
                    </button>
                    <button><Link to = {'/forgot'}> Forgot Password </Link></button>
                    
                </div>
                <div>{this.state.error.message}</div>
                <div>
                    <button><Link to = {'/signup'}> Sign Up Instead </Link></button> 
                </div>

                {/* <div>
                    <input 
                        type="checkbox"
                        id="mycheck"
                        onChange = { () => this.myCheck() }
                    />
                    <div>Show Password</div>
                </div> */}
                {/* <div>
                { this.check() }
                </div> */}
            </div>
        )
    }
}

export default SignIn;