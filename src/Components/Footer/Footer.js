import React from 'react';
import classes from './Footer.module.css';


const Footer = props => {
  
    return (
        <footer>
            <div>
                <a href="https://github.com/AkulKalu/portfolio" >
                    <img className={classes.GitHubLogo}  alt="GitHub" src={require('../../Content/Images/github.svg')}></img>
                </a>
                <span>Luka Krunić<span> ©2020</span></span>
                <span>Powerd by<img className={classes.ReactLogo} alt="REACT" src={require('../../Content/Images/REACT.svg')}></img></span>
              
            </div>
        </footer>
    )
}

export default Footer;