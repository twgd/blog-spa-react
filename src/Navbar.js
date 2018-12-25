/*
    處理導覽列
*/


import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


const Item = props => {
    const {to, label, exact} = props;
    return (
        <Route
            path={to}
            exact={exact}
            children={({ match })=> (
                <li className={"nav-item mr-3 " + ( match ? "active" : "")}>
                    <Link className="nav-link" to={to}>
                        {label}
                    </Link>
                </li>
            )}
        />
    );
}


const Navbar = () => {
    return (
        <Router>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav d-flex flex-row">
                        <Item to="/" exact={true} label="首頁" />
                        <Item to="/about" label="關於我" />
                        <Item to="/posts" label="我的文章" />
                        <Item to="/newpost" label="新增文章" />
                    </ul>  
                </div>
            </nav>
        </Router>
        
    );
}


export default Navbar;