/*
    登入頁面
*/

import React from 'react';
//import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }
    }

    handelChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handelLogin(e) {
        const { username, password, confirmPassword } = this.state;
        const { setUser, history } = this.props;
        
        e.preventDefault();

        if( !username || !password || !confirmPassword ) return;
        if( password !== confirmPassword ) return;

        axios.post('https://qootest.com/login', {
                username,
                password,
            })
            .then((res) => {
                setUser(res.data)
                console.log(res.data)
                history.push('/')
            }).catch((err) => {
                console.log(err);
            })
        
    }


    render() {
        const { username, password, confirmPassword } = this.state;
        
        
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">帳號</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="username" value={username} onChange={(e) => this.handelChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密碼</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={password} onChange={(e) => this.handelChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">確認密碼</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Password" value={confirmPassword} onChange={(e) => this.handelChange(e)}/>
                    </div>
                    
                    <button className="btn btn-primary" onClick={(e) => this.handelLogin(e)}>Submit</button>
                </form>
            </div>
        )
    }
}

//export default withRouter(Login);

export default Login;