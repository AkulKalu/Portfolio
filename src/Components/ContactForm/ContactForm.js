import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import emailjs from 'emailjs-com';



class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrolledTo: false,
            fields: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            sendCopy: false,
            valid: {
                name: null,
                email: null,
                phone: null,
                message: null,
            }
        }
        this.initialState = {
            fields: {...this.state.fields},
            sendCopy: false,
            valid: {...this.state.valid}
        }
    }
   
   componentDidMount() {
    const cmpEnter = () => {
        const cmp = document.getElementById('contactForm');
        if(cmp.getBoundingClientRect().bottom < window.innerHeight) {
            this.setState({
                scrolledTo: true
            })
            window.removeEventListener('scroll',cmpEnter)
        }
    }
    window.addEventListener('scroll', cmpEnter);
   }
   
    onChangeHandler = (value, type) => {
        let isValid = null;
        switch (type) {
            case 'name':
                isValid = this.nameValidation(value);
                break;
            case 'email':
                isValid = this.emailValidation(value);
                break;
            case 'phone':
                isValid = this.phoneValidation(value);
                break;
            case 'message':
                isValid = this.messageValidation(value);
                break;
            default: 
                return;
        }
        this.setState({
            fields: {
                ...this.state.fields,
                [type] : value,
            },
            valid : {
                ...this.state.valid,
                [type]: isValid
            }
        })
    }
    nameValidation = name => {
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
    emailValidation = email => {
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
    phoneValidation = phone => {
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
    
    messageValidation = message => {
        if (! message || message.trim() === '') {
            return 'Required';
          }
          if (message.trim().length < 30) {
            return 'Message needs to be at least thirty characters';
          }
          return true;
        };
    applyClass = inputField => {
        const condition = value => typeof value === 'string' ? classes.Invalid : value ? classes.Valid : null;
        return condition(this.state.valid[inputField]);
    }
    applyStyle = (style, delay) => {
        if(this.state.scrolledTo) {
            return {
                ...style,
                transitionDelay: `${delay}s`
            }
        }
        return null;
    }
    formValid = () => {
        for (const field in this.state.valid) {
            if (this.state.valid[field] !== true) {
                return false
            }
        }
        return true;
    }
    sendMessageHandler = () => {
        if(this.formValid()) {
            const templateId = this.state.sendCopy ? 'template_7il568c' : 'template_nog4tqd';
            emailjs.send('service_7ztro3q', templateId, this.state.fields, 'user_hcfnZ9PF7vhjx5Yb0CC4r')
            .then(response => {
                this.props.message(2)
                this.setState({
                    fields: {...this.initialState.fields},
                    sendCopy: false,
                    valid: {...this.initialState.valid}
                })
             }, error => {
                this.props.message(3);
             });
        }else {
            const validate = {
                name: this.nameValidation,
                email: this.emailValidation,
                phone: this.phoneValidation,
                message: this.messageValidation
            }
            const formState = {...this.state.valid};
            for (const field in formState) {
                formState[field] = validate[field](this.state.fields[field]);
            }
            this.setState({
                valid: {
                    ...formState
                }
            })
        }
    }
    checkBoxHandler = () => {
        this.setState({
            sendCopy: !this.state.sendCopy
        })
    }

    
    render() {
        const checkBoxStyle = this.state.sendCopy ? { transform: 'scale(1)'} : { transform: 'scale(0)'};
        const transformStyle = {
            transform: 'scaleX(1)'
        }
        const opacityStyle = {
            opacity: '1'
        }
        return (
            <form id="contactForm">
                <input style={this.applyStyle(transformStyle,0)} className={this.applyClass('name')} 
                       onChange={ e => this.onChangeHandler(e.target.value, 'name')} 
                       value={this.state.fields.name} 
                       type="text" placeholder="Name">
                </input>
                <span  className={classes.InputState}>{this.state.valid.name}</span>
                <input  style={this.applyStyle(transformStyle, 0.3)}  className={this.applyClass('email')} 
                       onChange={ e => this.onChangeHandler(e.target.value, 'email')} 
                       value={this.state.fields.email} 
                       type="email" placeholder="Email">
                </input>
                <span className={classes.InputState}>{this.state.valid.email}</span>
                 <input  style={this.applyStyle(transformStyle, 0.6)} className={this.applyClass('phone')} 
                        onChange={ e => this.onChangeHandler(e.target.value, 'phone')} 
                        value={this.state.fields.phone} 
                        type="text" placeholder="Phone">         
                 </input>
                 <span className={classes.InputState}>{this.state.valid.phone}</span>
                 <textarea style={this.applyStyle(transformStyle, 0.9)} className={this.applyClass('message')} 
                        onChange={ e => this.onChangeHandler(e.target.value, 'message')} 
                        value={this.state.fields.message} 
                        placeholder="Message" name="message" rows="8" cols="33"> 
                </textarea>
                <span className={classes.InputState}>{this.state.valid.message}</span>
                <div style={this.applyStyle(opacityStyle, 1.2)} className={classes.CheckBoxWrap}>
                    <div  onClick={this.checkBoxHandler} className={classes.CheckBox}>
                        <div style={checkBoxStyle}></div>
                    </div>
                    <span>Receve a copy</span>
                </div>
                <div style={this.applyStyle(opacityStyle, 1.5)} className={classes.CheckBoxWrap}>
                    <input onClick={this.sendMessageHandler}  className={this.formValid() ? classes.BtnValid : classes.BtnInvalid} type="button" value="SEND"></input>
                </div>
            
         </form>
        );

    }
}

export default ContactForm;
