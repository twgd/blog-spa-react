/*
    處理整個部落格
*/

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';


import NavbarForUser from '../containers/navbarForUserContainer';
import Login from '../containers/loginContainer';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Header from './Header';
import AllPosts from '../containers/postListContainer';
import Post from './Post';
import NewPost from './NewPost';


class App extends React.Component {

    render() {
        
        return (
            <Router>
                <div>
                    <NavbarForUser />
                    <Header />
                    <Navbar />
                    <div className="container mt-5">
                        <div className="content">
                            <Route path="/login" component={Login} />
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route exact path="/posts" component={AllPosts} />
                            <Route path="/posts/:postId" component={Post} />
                            <Route path="/newpost" component={NewPost} />
                        </div>
                    </div>
                </div>
            </Router>
            
        )
    }
}

export default App;
