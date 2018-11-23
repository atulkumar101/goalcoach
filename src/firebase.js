import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCtIzdLp-PEPMhMa9oUSXX7EBGgPvXtAo0",
    authDomain: "goalcoach-adebd.firebaseapp.com",
    databaseURL: "https://goalcoach-adebd.firebaseio.com",
    projectId: "goalcoach-adebd",
    storageBucket: "goalcoach-adebd.appspot.com",
    messagingSenderId: "443866446284"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
export const teammembersRef = firebase.database().ref('teammembers');
export const teamgoalsRef = firebase.database().ref('teamgoals');
