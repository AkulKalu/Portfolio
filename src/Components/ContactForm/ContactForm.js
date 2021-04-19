import React, { useRef,useState } from 'react';
import classes from './ContactForm.module.css';
import emailjs from 'emailjs-com';
import {useScrolledTo} from '../../Hooks/useScrolledTo'

function validateName(name) {
    if (!name || name.trim() === '') {
      return 'Required';
    }
    if (/[^a-zA-Z -]/.test(name)) {
      return 'Invalid characters';
    }
    if (name.trim().length < 3) {
      return 'Name needs to be at least three characters';
    }
    return true;
  };
function validateEmail(email) {
    if (!email || email.trim() === '') {
        return 'Required';
    }
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
        )
    ) {
        return true;
    }
    return 'Please enter a valid email';
};
function validatePhone(phone) {
    if (!phone || phone.trim() === '') {
        return true;
      }
    if (/[^0-9-]/.test(phone)) {
    return 'Invalid characters';
    }
    if (phone.trim().replace('-','').length < 9) {
    return 'Phone needs to be at least nine digits';
    }
    return true;
};

function validateMessage(message) {
    if (! message || message.trim() === '') {
        return 'Required';
      }
      if (message.trim().length < 30) {
        return 'Message needs to be at least thirty characters';
      }
      return true;
};
const formTemplate = {
    name: '',
    email: '',
    phone: '',
    message: '',
    sendCopy: false,
}
const validationTemplate =  {
    name: null,
    email: null,
    phone: null,
    message: null,
}

export default function ContactForm(props) {
    const [form, setForm] = useState({...formTemplate});
    const [isValid, setIsValid] = useState({...validationTemplate});
    const scrollAncor = useRef(null);
    const scrolledTo = useScrolledTo(scrollAncor, window.innerHeight / 3)
  
    const onChangeHandler = (value, field) => {
        let fieldIsValid = null;
        switch (field) {
            case 'name':
                fieldIsValid = validateName(value);
                break;
            case 'email':
                fieldIsValid = validateEmail(value);
                break;
            case 'phone':
                fieldIsValid = validatePhone(value);
                break;
            case 'message':
                fieldIsValid = validateMessage(value);
                break;
            default: 
                return;
        }
        setForm({
            ...form,
            [field] : value
        })
        setIsValid({
            ...isValid,
            [field] : fieldIsValid 
        })
    }
    
    const styleToValidatedStatus = inputField => {
        if(typeof isValid[inputField] === 'string') {
            return classes.Invalid
        }
        if(isValid[inputField]) {
            return classes.Valid
        }
    }
    const transitionEntrance = (style, delay) => {
        if(scrolledTo) {
            return {
                ...style,
                transitionDelay: `${delay}s`
            }
        }
        return null;
    }
    const checkIfFormIsValid = () => {
        for (const field in isValid) {
            if (isValid[field] !== true) {
                return false
            }
        }
        return true;
    }
    const sendMessageHandler = () => {
        if(checkIfFormIsValid()) {
            const templateId = form.sendCopy ? 'template_7il568c' : 'template_nog4tqd';
            emailjs.send('service_7ztro3q', templateId, form, 'user_hcfnZ9PF7vhjx5Yb0CC4r')
            .then(response => {
                props.message(2);
                setForm({...formTemplate});
                setIsValid({...validationTemplate})
               
             }, error => {
                props.message(3);
             });
        }else {
            let formState = {...validationTemplate};
            formState.name = validateName(form.name);
            formState.email = validateEmail(form.email);
            formState.phone = validatePhone(form.phone);
            formState.message = validateMessage(form.message)
            setIsValid(formState)  
        }
    }
    const checkBoxHandler = () => {
        setForm({
            ...form,
            sendCopy: !form.sendCopy
        })
    }

    const checkBoxStyle = form.sendCopy ? { transform: 'scale(1)'} : { transform: 'scale(0)'};
    const scaleIn = {
        transform: 'scaleX(1)'
    }
    const fadeIn = {
        opacity: '1'
    }
    
    return (
        <form ref={scrollAncor}>
            <input 
                style={transitionEntrance(scaleIn,0)} 
                className={styleToValidatedStatus('name')} 
                onChange={ e => onChangeHandler(e.target.value, 'name')} 
                value={form.name} 
                type="text" placeholder="Name">
            </input>
            <span  className={classes.InputState}>{isValid.name}</span>
            <input  
                style={transitionEntrance(scaleIn, 0.3)}  
                className={styleToValidatedStatus('email')} 
                onChange={ e => onChangeHandler(e.target.value, 'email')} 
                value={form.email} 
                type="email" placeholder="Email">
            </input>
            <span className={classes.InputState}>{isValid.email}</span>
                <input  
                    style={transitionEntrance(scaleIn, 0.6)} 
                    className={styleToValidatedStatus('phone')} 
                    onChange={ e => onChangeHandler(e.target.value, 'phone')} 
                    value={form.phone} 
                    type="text" placeholder="Phone">         
                </input>
                <span className={classes.InputState}>{isValid.phone}</span>
                <textarea 
                    style={transitionEntrance(scaleIn, 0.9)} 
                    className={styleToValidatedStatus('message')} 
                    onChange={ e => onChangeHandler(e.target.value, 'message')} 
                    value={form.message} 
                    placeholder="Message" name="message" rows="8" cols="33"> 
                </textarea>
            <span className={classes.InputState}>{isValid.message}</span>
            <div style={transitionEntrance(fadeIn, 1.2)} className={classes.CheckBoxWrap}>
                <div  onClick={checkBoxHandler} className={classes.CheckBox}>
                    <div style={checkBoxStyle}></div>
                </div>
                <span>Receve a copy</span>
            </div>
            <div style={transitionEntrance(fadeIn, 1.5)} className={classes.CheckBoxWrap}>
                <input 
                    onClick={sendMessageHandler}  
                    className={checkIfFormIsValid() ? classes.BtnValid : classes.BtnInvalid} 
                    type="button" 
                    value="SEND">
                </input>
            </div>
        </form>
    );

    
}


