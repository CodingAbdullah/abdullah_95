import React from 'react';
import '../../css/resume.css';
import HorizontalRule from '../HorizontalRule/HorizontalRule';

const Resume = () => {

    return (
        <section id="resume">
            <h1 className="resume-heading">Resume</h1>
            <p className="resume-paragraph">Here's a lightweight copy of my resume. Below is the link to download:</p>
            <div className="link-section">
                <b><i><u><a style={{ color: 'green' }} target="_blank" rel="noreferrer" href="https://genericbucket95.s3.us-east-2.amazonaws.com/Website+Resume.pdf">Resume</a></u></i></b>
            </div>
            <HorizontalRule />
        </section>
    )
}

export default Resume;