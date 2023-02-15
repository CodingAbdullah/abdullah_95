import React from 'react';
import HorizontalRule from '../HorizontalRule/HorizontalRule.jsx';
import Developer from '../Developer/Developer.jsx';
import Website from '../Website/Website.jsx';
import DataDevelopment from '../DataDevelopment/DataDevelopment.jsx'
import '../../css/skills.css';

const SkillsPage = () => {

    return (
        <section id="skill">
            <Developer />
            <HorizontalRule />
            <Website />
            <HorizontalRule />            
            <DataDevelopment />
            <HorizontalRule />
        </section>
    )
}

export default SkillsPage;