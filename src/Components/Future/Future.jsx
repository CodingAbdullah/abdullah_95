import '../../css/future.css';
const Future = () => {

    return (
        <div>
            <h1 className="background-heading">Today. The Future.</h1>
            <p className="about-paragraph">Originally from Brampton, I graduated McMaster in June 2018. Being a McMaster student was a surreal experience, one I will never forget. All the friends I made, through the good times and bad. The endless grinding journey of six years to pursue my degree was a major accomplishment.</p>
            <p className="about-paragraph">Upon graduation, I wanted to pursue a freelance role but due to circumstances, that didn't work out the way I expected.</p>
            <p className="about-paragraph">As of right now, due to the COVID-19 pandemic, I am working remotely and approaching things day by day. I greatly appreciate you taking the time to read about the "shy kid in class." Much love!</p>
            
            <div className="image-section">
                <img className="image" src={require("../../assets/images/bell.jpeg").default}  alt="Not Found" />
            </div>
        </div>
    )
}

export default Future;