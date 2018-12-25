/*
    處理首頁
    - 顯示最新 10 篇
*/

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        // ajax 取文章，依 id 反序，10 篇
        axios.get('http://45.55.26.18:3310/posts?_sort=id&_order=desc&_limit=10')
            .then((res) => {
                this.setState({
                    posts: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const {posts} = this.state;
        console.log(posts)
        
        return (
            <div>
                <div className="my-3">
                    {posts.map((item) => 
                        <div className="card" key={item.id}>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
                                <p className="card-text">{item.body}</p>
                                <Link to={"/posts/" + item.id } className="card-link">閱讀文章</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
        
    }
}

export default Home;