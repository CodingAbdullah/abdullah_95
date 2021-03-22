import '../../css/jobplacement.css';

const JobPlacement = () => {

    return (
        <div>
            <h3 className="job-placement-heading about-heading">Job Placements</h3>
            <h6 className="cibc-heading job-heading">CIBC</h6>
            <p className="about-paragraph">While completing my degree, I also had two Co-op placements. One at a bank (CIBC) and the other at an educational institution (TEC Diversified Solutions). I worked for four months at TEC and an year long internship with CIBC for a total of 16 months of CO-OP. I made use of my skills in both places and learned a lot about the working environment and how skills translate into the workplace. </p>
            <p className="about-paragraph">At CIBC, I was in a technical role providing assistance to my team and making sure all the software ran properly. Debugging/testing/re-writing portions of Bash and Python scripts to make sure they did what they were intended to do.</p>
            <p className="about-paragraph">Working in the infrastructure department, I learned about automation by creating Ruby files, understanding how CIBC's file transfer system worked (FeedHub and Autosys). I also made sure vulnerabilities were handled accordingly and ServiceNow was clean of any tickets. </p>
            <h6 className="tec-heading job-heading">TEC Diversified Solutions INC</h6>
            <p className="about-paragraph">Working at TEC was a unique experience. It was my first four month co-op placement. I used my knowledge of HTML, CSS, and JavaScript to design and develop a website for the startup.</p>
            <p className="about-paragraph">Incorporating UI principles, I had to make sure the design fit what the team was requesting for as well as making it visually appealing. I made use of a popular CSS framework, Bootstrap to complete the job and the website was good to go!</p>
                
            <div className="image-section">
                <img className="cibc" src={require("../../assets/images/cibc.jpg").default}  alt="Not Found" />
            </div>
        </div>
    )
}

export default JobPlacement;