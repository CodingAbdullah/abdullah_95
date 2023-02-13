import React from 'react';
import '../../css/about.css';
import HorizontalRule from '../HorizontalRule/HorizontalRule.jsx';
import Me from '../Me/Me.jsx';
import Future from '../Future/Future.jsx';

const AboutPage = () => {

    return (
        <section id="body">
            <Me />
            <HorizontalRule />
            <Future />
            <HorizontalRule />
        </section>
    )
}

export default AboutPage;