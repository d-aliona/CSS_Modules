import React from 'react';
import {Link} from 'react-router-dom';

import arrow from './images/arrow.svg';
import logo from './images/logo.svg';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <div className={styles.header_menu}>
                <Link className={styles.header_menuref} to="/"> 
                    Cities 
                    <img src={arrow} alt='arrow'/>                 
                </Link>
                <Link className={styles.header_menuref} to="/">
                    Properties
                    <img src={arrow} alt='arrow'/>    
                </Link>
                <Link className={styles.header_menuref} to="/"> Blog </Link>
                <Link className={styles.header_menuref} to="/"> Video </Link>
                <Link className={styles.header_menuref} to="/"> Contacts</Link>
            </div>
            <div className={styles.header_auth}>
                <Link className={styles.header_authref} to="/"> Log in</Link>
                <span>|</span>
                <Link className={styles.header_authref} to="/"> Sign up</Link>
            </div>

        </div>
    )
}

export {Header}