import React, { Component } from 'react';
import classes from './Contact.module.css';
import ContactForm from '../../../Components/ContactForm/ContactForm';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import ContactMessage from '../../../Components/CotactMessage/ContactMessage';


class Contact extends Component {
    state = {
        orn: null,
        message: 1,
    }

    componentDidMount() {
        const pullFooter = () => {
            const orn = document.getElementById('ornament').getBoundingClientRect();
            if(!this.state.orn && orn.y < window.innerHeight - (window.innerHeight / 10) ) {
                this.setState({
                    orn: {
                        transform: 'translateY(-1.2vh)'
                    }
                })
                window.removeEventListener('scroll', pullFooter)
            }
        }
        window.addEventListener('scroll', pullFooter)
    }
    messageSwitch = messageId => {
        this.setState({
            message: messageId
        })
    }
   
    render() {
      
        return (
            <div id="C" className={classes.Wrap}>
                <PageTitle text="CONTACT ME" />
                <ContactMessage switch={() => this.messageSwitch(1)} message={this.state.message} />
                <ContactForm  message={this.messageSwitch} />
                 <div style={this.state.orn} id="ornament" className={classes.Ornament}></div>
            </div>
        );

    }
}

export default Contact;