import React from 'react';
import logo from '../images/logo.svg';
import user from '../images/user.svg';
import Search from './Search';

function Header({fetchSearchAPI}){
    return (
        <div className="top-bar">
            <img src={logo} alt="logo"  className="left"/>
            <Search fetchSearchAPI={fetchSearchAPI}/>
            <img src={user} alt="user" className="right user"/>
        </div>
    )
}

export default Header
