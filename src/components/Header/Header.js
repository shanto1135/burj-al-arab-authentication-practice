import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {handelSignOut,users} = useFirebase()
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                    <Link to="/pvtcomponents">Book</Link>
                    </li>
                    {(users?.displayName) ?
                    <li>
                        <Link onClick={handelSignOut} className="btn-book" to="/logout">LogOut</Link>
                    </li> 
                    :
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    }
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;