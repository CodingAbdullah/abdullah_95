import '../../css/website.css';

const Website = () => {

    return (
        <div className="website-section padding-box">
                <h1 className="skill-heading website">Web Development</h1>
                <p className="body-paragraph">Over the years, working as a web developer, allowed me to explore both front-end, back-end, and database technology. I believe developers should be versatile in both areas of development as it allows them to become a complete developer. </p>
                <p className="body-paragraph">"Full-Stack" developer, as the term goes, is just that. The "stack" referring to the list of technologies that allow for both front-end and back-end development. </p>
                <p className="body-paragraph">As a Full-Stack developer, I can design and develop dynamic, secure, and user-friendly websites. My stack is the following: </p>
                <h3 className="front-end end-heading">Front-End</h3>
                <h6 className="language-heading">Languages</h6>
                <ul className="end-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ECMASCRIPT 6)</li>
                    <li>EJS (Embedded JavaScript)</li>
                </ul>
                <h6 className="language-heading">Frameworks and Libraries</h6>
                <ul className="end-list">
                    <li>Bootstrap (CSS Framework)</li>
                    <li>React JS</li>
                    <li>jQuery (JavaScript Library)</li>
                </ul>
                <h3 className="end-heading back-end">Back-End</h3>
                <h6 className="language-heading">Languages</h6>
                <ul className="end-list">
                    <li>MySQL (Relational Database)</li>
                    <li>MongoDB (Non-Relational Database)</li>
                    <li>PHP</li>
                    <li>Node JS</li>
                    <li>Apache</li>
                </ul>
                <h6 className="language-heading">Frameworks and Libraries</h6>
                <ul className="end-list">
                    <li>Express JS</li>
                </ul>

                <p className="skill-describe-start skill-description">I originally learned HTML, CSS and followed that with JavaScript, MySQL and PHP. That was my "stack". As I was getting more comfortable with web development, I started to learn JavaScript libraries such as jQuery and frameworks such as React, Node, and Express. </p>
                <p className="skill-description">I love Bootstrap. As a CSS framework, it helps reduce development time by allowing developers to use ready-made components (forms, buttons, etc).</p>
        </div>
    )
}

export default Website;