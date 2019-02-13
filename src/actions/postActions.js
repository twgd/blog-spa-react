/*
    action types
*/

export const SET_POSTS = 'SET_POSTS';
export const GET_POST = 'GET_POST';
export const REMOVE_POST = 'REMOVE_POST';



/*
    action creators
*/

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        posts
    }
}

export const getPost = id => {
    return {
        type: GET_POST,
        id
    }
}

export const removePost = id => {
    return {
        type: REMOVE_POST,
        id
    }
}

