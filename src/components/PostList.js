/*
    處理文章列表
    p.s. 還未做分頁功能
*/

import React from 'react';
import axios from 'axios';


// 單一列表
class List extends React.Component {

    handelClick() {
        this.props.handelClick(this.props.post.id)
    }

    handelRemove() {
        this.props.handelRemove(this.props.post.id)
    }

    render() {
        const {post} = this.props;

        return (
            <li className="list-group-item border-top-0 pl-0 mb-5">
                <h5 className="post-list-title" onClick={()=>this.handelClick()}>{post.title}</h5>
                <div className="post-list-status text-secondary">
                    <span className="post-list-author">
                        <i className="fas fa-user mr-2"></i>
                        {post.author}
                    </span>
                    <button type="button" className="btn btn-secondary btn-sm ml-3">編輯</button>
                    <button type="button" className="btn btn-danger btn-sm ml-1" onClick={()=>this.handelRemove()}>刪除</button>
                </div>
            </li>
        );
    }
}

// 文章列表頁
class PostList extends React.Component {

    componentDidMount() {
        const {setPosts} = this.props;

        axios.get('https://qootest.com/posts?_sort=id&_order=desc')
            .then((res)=>{
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }
    

    handelClick(id) {
        const {history} = this.props;
        history.push('/posts/' + id);
    }

    handelRemove(id) {
        const {removePost} = this.props;
        axios.delete('https://qootest.com/posts/' + id)
            .then(()=>{
                removePost(id);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    render() {
        console.log(this.props)
        const {posts} = this.props;

        return (
            <div>
                <header className="content__header">
                    <h2 className="content__title">文章列表</h2>
                </header>
                <div className="content__body">
                    <div className="card border-0">
                        <ul className="list-group list-group-flush">
                            {posts.map((item) => 
                                <List
                                    key={item.id}
                                    post={item}
                                    handelClick={(id) => this.handelClick(id)}
                                    handelRemove={(id) => this.handelRemove(id)}
                                />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default PostList;
