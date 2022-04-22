import React from 'react';

import phone from './images/phone.svg';
import mail from './images/mail.svg';
import wa from './images/whatsapp.svg';
import viber from './images/viber.svg';
import messenger from './images/messenger.svg';
import telegram from './images/telegram.svg';

import styles from './contacts.module.scss';

const Contacts = () => {
    return (
        <div className={styles.container}>
            <hr className={styles.line}/>
            <div className={styles.contacts}>
                <div className={styles.contact_phone}>
                    <h4 className={styles.contact_heading}> Phone </h4>
                    <p className={styles.contact_text}>
                       <img src={phone} alt='phone'/>
                       <span>+34&nbsp;965&nbsp;020784</span>
                    </p>
                </div>
                <div className={styles.contact_office}>
                    <h4 className={styles.contact_heading}> Office in  Spain </h4>
                    <p className={styles.contact_text}>
                        Centro Comercial Playa Flamenca C / Niagara,
                        63 Local 60/PB, first floor, 03189 - Orihuela 
                        Costa (Alicante), Spain
                    </p>
                </div>
                <div className={styles.contact_mail}>
                    <h4 className={styles.contact_heading}> E-mail </h4>
                    <p className={styles.contact_text}>
                        <img src={mail} alt='mail'/>
                        <span>sales@wtgspain.com</span>
                    </p>
                </div>
            </div>
            <hr className={styles.line}/>
            <div className={styles.messangers_wrapper}>
                <h3 className={styles.heading}>We are online</h3>
                <ul className={styles.list_messangers}> 
                    <li className={styles.listItem}>
                        <img src={wa} alt='whatsapp' />
                        <span> WhatsApp </span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={viber} alt='viber' />
                        <span> Viber </span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={messenger} alt='messenger' />
                        <span> Messenger </span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={telegram} alt='telegram' />
                        <span> Telegram </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {Contacts}