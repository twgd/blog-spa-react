import {SET_POSTS, REMOVE_POST} from '../actions/postActions';

const initialState = {
    posts: [],
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts,
            };
        
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== action.id )
            }

        default: 
            return state;
    }
};


export default posts;