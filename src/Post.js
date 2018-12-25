/*
    處理單篇文章
*/

import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// 單篇文章
class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            post:{},
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        axios.get('http://45.55.26.18:3310/posts/' + postId )
            .then((res) => {
                this.setState({
                    post: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        const {post} = this.state;
        return (
            <div>
                <Link className="btn btn-primary" to="/posts" role="button">回到文章列表</Link>
                <h2>{post.title}</h2>
                <p>{post.author}</p>
                <p>{post.body}</p>
            </div>
        )
        
    }
}

export default Post;
