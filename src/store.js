import {createStore} from 'redux';
import blogApp from './reducers/rootReducer';


let store = createStore(blogApp);


export default store;