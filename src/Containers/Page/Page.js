import React, {Component, Fragment} from 'react';
import Welcome from '../Layouts/Welcome/Welcome';
import About from '../Layouts/About/About';
import Projects from '../Layouts/Projects/Projects';
import Contact from '../Layouts/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Dock from '../../Components/Dock/Dock';


class Page extends Component {
    render() {
        return (
            <Fragment>
                <Welcome />
                <Dock />
                <Projects />
                <About />
                <Contact />
                <Footer />
            </Fragment>
        )
    }
}

export default Page;

              
