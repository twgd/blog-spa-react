import { SET_USER } from '../actions/userActions';

const user = (state = {}, action) => {
    switch(action.type) {
        case SET_USER: 
            return {
                ...state,
                data: action.data
            };

        default:
            return state;
    }
}

export default user;
