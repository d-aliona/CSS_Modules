import React from 'react';

import {Form} from '../form/Form';
import {Contacts} from '../contacts/Contacts';
import decor1 from './images/decor.svg';


import styles from './formContacts.module.scss';

const FormContacts = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imgDecor} src={decor1} alt='decor' />
            <p className={styles.text}>We are always in touch and will be happy to resolve any of your questions.</p>
            <Form /> 
            <Contacts />          
        </div>
    )
}

export {FormContacts}