import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';
import '../App.css';

class GoalItem extends Component{

    completeGoal() {

        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        goalRef.child(serverKey).remove();
        // console.log('email', email, 'title', title);
        completeGoalRef.push({email,title});
    }

    deleteGoal() {
        // const {email} = this.props.user;
        // const {title, serverKey} = this.props.goal;
        // delete clicked Goal
    }

    render() {
        console.log('this.props', this.props);
        const {email, title} = this.props.goal;
        return(
            <div style={{margin: '5px'}}>
                <div className = "fl">
                <strong>{title} </strong>
                <span style={{marginRight: '5px'}}>submitted by <em>{email}</em></span>
                </div>
                <div className= "fr">
                <button
                    className = "btn btn-sm btn-primary"
                    style={{marginRight: '5px'}}
                    onClick = { () => this.completeGoal() }
                >
                Complete
                </button>
                <button
                    className = "btn btn-sm btn-danger"
                    style={{marginRight: '5px'}}
                    onClick = { () => this.deleteGoal()}
                >
                Delete
                </button>
                </div>
                <div className="cb"></div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, null)(GoalItem);