/*
    發表新文章
*/

import React from 'react';
import axios from 'axios';


class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
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

        const {title, body} = this.state;
        if (!title || !body) {
            return;
        }

        axios.post('https://qootest.com/posts',  {
                title,
                body
            })
            .then(() => {
                this.setState({
                    title: '',
                    body: '',
                    published: true,
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { title, body, published } = this.state;
        return (
            <div>
                {
                    published && 
                    <div className="alert alert-success" role="alert">
                        文章發佈成功！
                    </div>
                }
                <header className="content__header">
                    <h2 className="content__title">發佈新文章</h2>
                </header>
                <div className="content__body">
                    <form>
                        <div className="form-group">
                            <label className="font-weight-bold" htmlFor="title">標題</label>
                            <input type="text" className="form-control" name="title" placeholder="文章標題" value={title} onChange={(e) => this.handelChange(e)} />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold" htmlFor="body">內容</label>
                            <textarea className="form-control" name="body" rows="3" placeholder="文章內容" value={body} onChange={(e) => this.handelChange(e)}></textarea>
                        </div>
                        <button className="btn btn-outline-secondary" onClick={(e) => this.createNewPost(e)}>發佈</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;