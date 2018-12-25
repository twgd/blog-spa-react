/*
    發表新文章表單
*/

import React from 'react';
import axios from 'axios';


class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            body: '',
            published: false,
        }
    }

    handelChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            published: false,
        });
    }

    createNewPost(e) {
        e.preventDefault()

        const {title, author, body} = this.state;
        if (!title || !author || !body) {
            return;
        }

        axios.post('http://45.55.26.18:3310/posts',  {
                title,
                author,
                body
            })
            .then(() => {
                this.setState({
                    title: '',
                    author: '',
                    body: '',
                    published: true,
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { title, author, body, published } = this.state;
        console.log(title, author, body, published);
        return (
            <div>
                <div className="my-3">
                    {
                        published && 
                        <div className="alert alert-success" role="alert">
                            文章發佈成功！
                        </div>
                    }
                    <h2>發佈新文章</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">標題</label>
                            <input type="text" className="form-control" name="title" placeholder="文章標題" value={title} onChange={(e) => this.handelChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">作者</label>
                            <input type="text" className="form-control" name="author" placeholder="作者" value={author} onChange={(e) => this.handelChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">內容</label>
                            <textarea className="form-control" name="body" rows="3" placeholder="文章內容" value={body} onChange={(e) => this.handelChange(e)}></textarea>
                        </div>
                        <button className="btn btn-info" onClick={(e) => this.createNewPost(e)}>發佈</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;