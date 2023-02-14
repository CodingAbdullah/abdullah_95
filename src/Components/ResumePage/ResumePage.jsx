import React from 'react';
import '../../css/resume.css';

const Resume = () => {

    return (
        <section id="resume">
            <h1 className="resume-heading">Resume</h1>
            <p className="resume-paragraph">Here's a lightweight copy of my resume. Below is the link to download:</p>
            <div className="link-section">
                <b><i><u><a style={{ color: 'green' }} href="https://genericbucket95.s3.us-east-2.amazonaws.com/Website+Resume.pdf">Resume</a></u></i></b>
            </div>
        </section>
    )
}

export default Resume;