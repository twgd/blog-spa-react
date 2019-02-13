/*
    action types
*/
export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';


/*
    action creators
*/
export const setUser = (data) => {
    return {
        type: SET_USER,
        data
    }
}

export const getUser = (data) => {
    return {
        type: GET_USER,
        data
    }
}