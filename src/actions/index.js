import { SIGNED_IN, SET_GOALS, SET_COMPLETED, SET_TEAMGOALS } from '../constants';

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completeGoals) {
    const action = {
        type: SET_COMPLETED,
        completeGoals
    }
    return action;
}

export function setTeamgoals(teamgoals) {
    const action = {
        type: SET_TEAMGOALS,
        teamgoals
    }
    return action;
}