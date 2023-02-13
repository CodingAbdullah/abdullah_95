import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.css';

const Header = () => {

    return (
            <section id="heading">
                <div class="navbar-row row">
                  <div class="col-md-3 navbar-brand-section">
                    <h3 class="navbar-heading navbar-brand">AbdulM95</h3>
                  </div>
                  <div class="col-md-6 links ml-auto">
                    <Link class="link" to="/">Home</Link>
                    <Link class="link" to="/about">About</Link> 
                    <Link class="link" to="/skills">Skills</Link> 
                    <Link class="link" to="/resume">Resume</Link> 
                    <Link class="link" to="/leisure">Leisure</Link>
                    <Link class="link" to="/portfolio">Portfolio</Link> 
                  </div>
                </div>
            </section>
    )
}

export default Header;