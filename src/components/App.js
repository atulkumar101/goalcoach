import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component{

    signOut() {
        console.log('signing out');
        firebaseApp.auth().signOut();
        console.log('sign out successful');
    }

    render() {
        return(
            <div style = {{margin: '5px'}}>
                <h3>Goal Coach</h3>
                <AddGoal />
                <hr />
                <h4>Goals</h4>
                <GoalList />
                <hr />
                <h4>Complete Goals</h4>
                <CompleteGoalList />
                <hr />
                {/* <div>GoalList</div> */}
                <button
                 className = "btn btn-danger"
                 onClick = { () => this.signOut() }
                >
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null)(App);