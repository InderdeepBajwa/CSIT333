
import React from 'react';

// Importing pages here
import About from './../about/about';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './navbar.css';
import Contact from '../contact-us/contact';
import Parent from './../parent/parent';

class Navbar extends React.Component {
    render() {
        return(
            <>
                <Router>
                    <ul className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contactme">Contact Me plz kthx</Link>
                        <Link to="/parent"> Parent</Link>
                    </ul>

                    <Route path="/about" component={About} />
                    <Route path="/contactme" component={Contact} />
                    <Route path="/parent" component={Parent} />


                </Router>
            </>
        )
    }
}

export default Navbar;
