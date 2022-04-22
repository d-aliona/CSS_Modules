import React from 'react';

import map from './images/map.svg';
import logo from './images/locLogo.svg';

import styles from './form.module.scss';

const Form = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imgMap} src={map} alt='map' />
            <img className={styles.imgLogo} src={logo} alt='location_logo' />
            <h2 className={styles.form_heading}> Contact us </h2>
            <form className={styles.form_inputs}>
                <input className={styles.input} type='text' placeholder='Name' />
                <input className={styles.input} type='text' placeholder='Phone' />
                <input className={styles.input} type='text' placeholder='E-mail' />
                <textarea className={styles.input_message} name="answer" placeholder="Message" rows='6' />
                <button className={styles.button}>Send</button>
                <p className={styles.form_text}> Privacy policy </p>
            </form>
        </div>
    )
}

export {Form}