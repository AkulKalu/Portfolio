import React, { useState, useRef } from 'react';
import classes from './Contact.module.css';
import ContactForm from '../../../Components/ContactForm/ContactForm';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import ContactMessage from '../../../Components/CotactMessage/ContactMessage';
import {useScrolledTo} from '../../../Hooks/useScrolledTo';

export default function Contact(props) {
    const [message, setMessage] = useState(1)
    const scrollAncor = useRef(null);
    const scrolledTo = useScrolledTo(scrollAncor, window.innerHeight /8)

    const messageSwitch = messageId => {
        setMessage(messageId);
    }

    let footerPulled = scrolledTo ? {transform: 'translateY(-1.2vh)'} : null;

    return (
        <div id="C" ref={scrollAncor} className={classes.Wrap}>
            <PageTitle text="CONTACT ME" />
            <ContactMessage display = {scrolledTo} switch={() => messageSwitch(1)} message={message} />
            <ContactForm  message={messageSwitch} />
            <div style={footerPulled} id="ornament" className={classes.Ornament}></div>
        </div>
    );
}


