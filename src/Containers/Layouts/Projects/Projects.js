import React, { Component } from 'react';
import classes from './Projects.module.css';
import Project from '../../../Components/Project/Project';
import PageTitle from '../../../Components/PageTitle/PageTitle';


class Projects extends Component {

    render() {
        return (
            <div id="projects" className={classes.Wrap}>
                <PageTitle text="MY PROJECTS" />
                <Project   project='qrcodes' id="P1" />
                <Project   reverse   project='sudoku' id="P2" />
                <Project   project='sorter' id="P3"/>
                <Project   reverse project='weather' id="P4" />
            </div>
        );
    }
}

export default Projects;


