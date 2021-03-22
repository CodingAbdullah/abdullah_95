import '../../css/programming.css';

const Programming = () => {

    return (
        <div className="programming-section">
                <h1 className="programming-heading">Programming</h1>
                <p className="programming-paragraph">A large part of my free time is applied to learning and honing my programming skills. As a software developer, it is important to continue to practice your skills by working on personal projects. </p>
                <p className="programming-paragraph">Not only do you grasp the concepts of the languages you are using but gain expertise in problem solving. This is an essential skill that needs to further develop if you want to become a successful developer.</p>
                <p className="programming-paragraph-list">Some of the personal projects I've worked on are: <ul><li>Building a Personal Website (this one!)</li><li>Building Websites (Search Engines, Landing Pages)</li><li>Data Mining using Python</li></ul></p>
                <p className="last-programming-paragraph">One of the projects I recently worked on involved a sportsfeed API which returns game results. </p>
                <img className="programming-image" src={require("../../assets/images/programming.png").default} alt="Not Found" />
        </div>
    )
}

export default Programming;