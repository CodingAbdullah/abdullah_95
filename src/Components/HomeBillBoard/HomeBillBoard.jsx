import '../../css/homebillboard.css';

const HomeBillBoard = () => {

    return (
        <div id="home" className="row">
            <div className="head-section col-lg-6 col-md-6">
                <div className="software-engineer-section">
                    <p className="heading-software">Software Engineer</p>
                </div>
                <p className="heading-paragraph">Life-long Learner. Passionate. Dedicated.</p>
            </div>
            <div className="picture-section col-lg-6 col-md-6">
                <img className="personal-photo" src={require("../../assets/images/me.jpg").default} alt="Not Found" />
            </div>
        </div>
    )
}

export default HomeBillBoard;