import { withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import {setPosts, removePost} from '../actions/postActions';

import PostList from '../components/PostList';



const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(setPosts(posts))
        },

        removePost: (id) => {
            dispatch(removePost(id))
        }
    }
}

const postContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)

export default withRouter(postContainer);