import React from 'react';

import decor from './images/decor.svg';
import contact from './images/contact.svg';

import styles from './main.module.scss';

const Main = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imgDecor} src={decor} alt='decor' />
            <img className={styles.imgContact} src={contact} alt='contact' />
            <div className={styles.heading}>
                <div className={styles.line}> </div>
                <h3 className={styles.h3}>WTG SPAIN</h3>
                <h2 className={styles.h2}>Do you need <span>some help</span>?</h2>
                <p className={styles.text}>
                    Contact us right now and our team will do everything to help you.
                </p>
                <button className={styles.button}>Contact us</button>
            </div>
        </div>
    )
}

export {Main}