import '../../css/resume.css';

const Resume = () => {

    return (
        <section id="resume">
            <h1 className="resume-heading">Resume/Cover Letter</h1>
            <p className="resume-paragraph">If you want a light copy of my resume (the fine-grained detailed one is kept with me), please download it below. For security reasons, I have only provided my email address.</p>
            <p className="resume-paragraph">If you'd like to touch base, please send an email. </p>
            <p className="resume-paragraph last">Below is the link to download:</p>
            <div className="link-section">
                <a style={{color: 'green'}}href={require("../../assets/files/websiteResume.pdf")} download>Download File</a>
            </div>
        </section>
    )
}

export default Resume;