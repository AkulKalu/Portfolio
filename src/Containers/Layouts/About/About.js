import React, { Component } from 'react';
import classes from './About.module.css';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import Skill from '../../../Components/Skill/Skill';



class About extends Component {
    state = {
        scrolledTo: false
    }

    componentDidMount() {
        const inViewHandler = () => {
            const el = document.getElementById('aboutMeInfo');
            if(el.getBoundingClientRect().bottom < window.innerHeight*0.7) {
                this.setState({scrolledTo: true});
                window.removeEventListener('scroll', inViewHandler);
            }
        }
        window.addEventListener('scroll', inViewHandler);
    }

    render() {
        const showParagraf = delay => {
            return this.state.scrolledTo ? {
                opacity: '1',
                transitionDelay: `${delay}s`
            }: null
        }
        const renderSkillList = skillList => {
            return skillList.map( skill => {
                return <Skill key={`${skill}`} show={this.state.scrolledTo} name={skill} />})
        }
        const skillClasses = [classes.SkillsContainer, this.state.scrolledTo && classes.Show].join(' ');
        return (
            <div id="A" className={classes.Wrap}>
                <PageTitle text="ABOUT ME" />
                <div id="aboutMeInfo" className={classes.Info}>
                    <p style={showParagraf(0)}>While currently i spend most of my time expanding on my web development skills, both frontend and backend, i dont shy from
                        any chalange. I enjoy solving problems, and as such im constantly learning new things which is what, i belive, my strongest skill, to be able to
                        learn quickly what is required to finish a product.</p>
                    <br/>
                    <p style={showParagraf(0.5)}>I consider to have only scratched the surface in this field. Money is not currently my primary motive, getting better at this is,
                    therefore i am constantly expanding my skillset so always contact me for more information about potential endeavours .</p>
                    <br/>
                    <p style={showParagraf(1)}>For more general information about me, take a look at my <a href={require('../../../Content/cv.pdf')}> CV</a>.</p>
                </div>
                <div className={classes.TechSkills}>
                    <div className={skillClasses}>
                        {renderSkillList(['HTML', 'SCSS-CSS', 'UX'])}
                    </div>
                    <div className={skillClasses}>
                        {renderSkillList(['REACT', 'JAVASCRIPT' ,'TYPESCRIPT'])}
                    </div>
                    <div className={skillClasses}>
                        {renderSkillList(['LARAVEL', 'PHP'])}
                    </div>
                </div> 
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
               
            </div>      
        );

    }
}

export default About;

