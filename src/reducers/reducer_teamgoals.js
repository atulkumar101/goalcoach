import { SET_TEAMGOALS } from '../constants';

export default ( state = [], action) => {
    switch(action.type) {
        case SET_TEAMGOALS:
            const {teamgoals} = action;
            return teamgoals;
        default:
            return state;
    }
}