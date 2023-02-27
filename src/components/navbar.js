import React, { Component } from "react";
import Navitem from './navitem'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="home" tolink="/"></Navitem>
                    <Navitem item="about" tolink="/about"></Navitem>
                    <Navitem item="eduaction" tolink="/eduaction"></Navitem>
                    <Navitem item="skills" tolink="/skills"></Navitem>
                    <Navitem item="contact" tolink="/contact"></Navitem>
                </ul>
            </nav>
        )
    }

}

export default Navbar;