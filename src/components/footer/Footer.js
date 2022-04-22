import React from 'react';
import {Link} from 'react-router-dom';

import logo from './images/logo.svg';
import phone from './images/phone.svg';
import mail from './images/mail.svg';
import arrow from './images/arrowtop.svg';
import fc from './images/facebook.svg';
import insta from './images/instagram.svg';
import link from './images/linkedin.svg';
import loc from './images/loc.svg';
import qe from './images/question.svg';
import star from './images/Star.svg';
import yt from './images/youtube.svg';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <p className={styles.footer_heading}>
                <span>THE BEST</span> REAL ESTATE IN SPAIN
            </p>
            <hr className={styles.line}/>
            <div className={styles.footer_menu}>
                <Link className={styles.footer_menuref} to="/"> All&nbsp;cities </Link>
                <Link className={styles.footer_menuref} to="/"> Blog </Link>
                <Link className={styles.footer_menuref} to="/"> Video </Link>
                <Link className={styles.footer_menuref} to="/"> Contacts</Link>
            </div>
            <div className={styles.footer_info}>
                <div className={styles.contacts}>
                    <h4 className={styles.info_heading}>Contacts: </h4>
                    <ul className={styles.list_contacts}>
                        <li className={styles.li_contacts}>
                            <img src={phone} alt='phone' />
                            <span> +34&nbsp;(965)&nbsp;020&nbsp;-&nbsp;784 </span>
                        </li>
                        <li className={styles.li_contacts}>
                            <img src={mail} alt='mail' />
                            <span> sales@wtgspain.com </span>
                        </li>
                        <li className={styles.li_contacts}>
                            <img src={loc} alt='location' />
                            <span> Centro Comercial «Playa Flamenca»
                                C/ Niagara, 63 Local 60/PB, first floor,
                                03189 - Orihuela Costa (Alicante), Spain 
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={styles.type}>
                    <h4 className={styles.info_heading}>Type: </h4>
                    <ul className={styles.list_type}>
                        <li>Appartaments</li>
                        <li>Penthousses</li>
                        <li>Townhouses</li>
                        <li>Commercial</li>
                        <li>Bungalows</li>
                        <li>Duplexes</li>
                        <li>Villas</li>
                    </ul>
                </div>
                <div className={styles.follow}>
                    <h4 className={styles.info_heading}> Follow us: </h4>
                    <ul className={styles.list_follow}>
                        <li >
                            <img src={fc} alt='facebook' />
                            <span> Facebook</span>
                        </li>
                        <li >
                            <img src={yt} alt='youtube' />
                            <span>YouTube</span>
                        </li>
                        <li >
                            <img src={link} alt='linkedin' />
                            <span> Linkedin </span>
                        </li>
                        <li >
                            <img src={insta} alt='instagram' />
                            <span> Instagram </span>
                        </li>
                    </ul>
                    <div className={styles.subscribe}>
                        <span>Subscribe to new objects</span>
                        <img src={qe} alt='question' />
                    </div>
                    <input className={styles.input} type='text' placeholder='Your email' />
                    <input className={styles.submit} type='submit' value='Subscribe' />
                </div>
                <div className={styles.reating}>
                    <span className={styles.reating14}>Reating 4.9/5: </span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={star} alt='star' />&nbsp;
                    <img src={star} alt='star' />&nbsp;
                    <img src={star} alt='star' />&nbsp;
                    <img src={star} alt='star' />&nbsp;
                    <img src={star} alt='star' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.reating12}>820 votes </span>
                </div>
            </div>
            <a href='#'><img className={styles.go_top} src={arrow} alt='arrowtop' /> </a>
            <p className={styles.copyright}>
                The company "WTG Spain" specializes in the investment and sale of real estate in Spain, and the provision of legal and consulting services.
                All rights reserved. "WTG Spain" - The Best Real Estate in Spain. © Copyright 2007 - 2020.
            </p>
        </div>
    )
}

export {Footer}