/*
    處理文章列表
*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


// 單一列表
class List extends React.Component {

    handelClick() {
        this.props.handelClick(this.props.post.id)
    }

    render() {
        const {post} = this.props;

        return (
            <li className="list-group-item" onClick={()=>this.handelClick()}>
                {'#' + post.id}<br />
                {post.title}
            </li>
        );
    }
}

// 文章列表頁
class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        // ajax 抓資料
        axios.get('http://45.55.26.18:3310/posts?_sort=id&_order=desc')
            .then((res)=>{
                this.setState({
                    posts: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handelClick(id) {
        const {history} = this.props;
        history.push('/posts/' + id);
    }

    render() {
        const {posts} = this.state;

        return (
            <div>
                <div className="my-3">
                    <h2>文章列表</h2>
                </div>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {posts.map((item) => 
                            <List
                                key={item.id}
                                post={item}
                                handelClick={(id) =>this.handelClick(id)}
                            />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(PostList);
