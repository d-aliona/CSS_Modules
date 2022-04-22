import React from 'react';

import styles from './UP_panel.module.scss';

import mail from './images/mail.svg';
import phone from './images/phone.svg';
import whatsapp from './images/whatsapp.svg';
import heart from './images/heart.svg';
import uk from './images/united-kingdom.svg';

const UP_panel = () => {
    console.log(styles)
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.listContact}>
                    <li className={styles.listItemContact}>
                        <img src={mail} alt='mail' />
                        <span> sales@wtgspain.com </span>
                    </li>
                    <li className={styles.listItemContact}>
                        <img src={phone} alt='phone' />
                        <span>+34&nbsp;965&nbsp;020784</span>
                    </li>
                    <li className={styles.listItemContact}>
                        <img src={whatsapp} alt='whatsapp' />
                        <span> WhatsApp </span>
                    </li>
                </ul>
                <ul className={styles.listLang}>
                    <li className={styles.listItemLang}>
                        <div className={styles.heart}>
                            <img src={heart} alt='heart'/>
                            <div className={styles.circle}> 
                                24                  
                            </div>
                        </div>    
                    </li>
                    <li className={styles.listItemLang}>
                        <img src={uk} alt='uk' />
                    </li>
                </ul>
            </div>
        </>
    )
}

export {UP_panel}