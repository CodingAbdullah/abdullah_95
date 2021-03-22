import '../../css/about.css';
import HorizontalRule from '../HorizontalRule/HorizontalRule.jsx';
import Me from '../Me/Me.jsx';
import JobPlacement from '../JobPlacement/JobPlacement.jsx';
import Future from '../Future/Future.jsx';

const AboutPage = () => {

    return (
        <section id="body">
            <Me />
            <HorizontalRule />
            <JobPlacement /> 
            <HorizontalRule />
            <Future />
        </section>
    )
}

export default AboutPage;