import '../../css/me.css';

const Me = () => {

    return (
        <div>
            <h1 className="background-heading">A Bit About Me</h1>
            <h3 className="education-heading about-heading">Education</h3>
            <p className="about-paragraph">Hey there! Thanks for taking the time to read about me! I hope the person reading this is in a good state of health mentally, physically, and spiritually. I am a Software Engineering graduate from McMaster University.</p>
            <p className="about-paragraph">A demanding program that covers a large scope of all things related to software design, development, and testing. Having a keen eye to program since high school, my passion extended into university and I decided to pursue an engineering degree specialized in Software. </p>
            <p className="about-paragraph">I chose McMaster because of its unique program structure. The landscape, students, professors and the overall environment foster the learning and growth of students. </p> 
            
            <div className="image-section">
                <img className="image" src={require("../../assets/images/mcmaster.jpg").default}  alt="Not Found" />
            </div>
        </div>
    )
}

export default Me;