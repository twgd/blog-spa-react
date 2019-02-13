import {combineReducers} from 'redux';
import posts from './postReducers';
import user from './userReducers';


const blogApp = combineReducers ({
    posts,
    user,
});

export default blogApp;