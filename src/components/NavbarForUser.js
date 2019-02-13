/*
    登入狀態的 nav
*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class NavbarForUser extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            user: undefined,
        }
    }

    handelLogin() {
        const {history} = this.props;
        console.log(history);
        history.push('/login');
    }

    handelLogout() {
        const {isLoggedIn} = this.state;

        axios.get('https://qootest.com/logout')
            .then((res) => {
                console.log(res);
                this.setState({
                    isLoggedIn: !isLoggedIn,
                    user: undefined,
                });
            }).catch((err) => {
                console.log(err)
            });
    }
    

    render () {
        //const {user} = this.state;
        //const {data} = this.props;
        

        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-text">
                    
                </span>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.handelLogin()}>登入</button>
                {
                    
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.handelLogout()}>登出</button>
                }
            </nav>
        )
    }
}

export default withRouter(NavbarForUser);