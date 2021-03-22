import HorizontalRule from '../HorizontalRule/HorizontalRule.jsx';
import Developer from '../Developer/Developer.jsx';
import Website from '../Website/Website.jsx';
import Database from '../Database/Database.jsx';
import Api from '../Api/Api.jsx';
import DataDevelopment from '../DataDevelopment/DataDevelopment.jsx'

import '../../css/skills.css';

const SkillsPage = () => {

    return (
        <section id="skill">
            <Developer />
            <HorizontalRule />
            <Website />
            <HorizontalRule />            
            <Database />
            <HorizontalRule />
            <Api />
            <HorizontalRule />
            <DataDevelopment />
        </section>
    )
}

export default SkillsPage;