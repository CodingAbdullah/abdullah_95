import HorizontalRule from '../HorizontalRule/HorizontalRule.jsx';
import { Link } from 'react-router-dom';

import '../../css/homeinformation.css';

const HomeInformation = () => {

    return (
            <section id="mid-section">
                <div className="mid-upper-row row">
                    <div className="resume-row col-lg-4">
                      <Link exact to="/resume" exact><a className="icon-address" href="/resume">
                            <i className="fas fa-file-alt fa-6x"></i>
                            <h2 className="mid-heading">Resume</h2>
                            <p className="mid-paragraph">A comprehensive overview about me just one click away!</p>
                        </a></Link>
                    </div>
                </div>
                <HorizontalRule />
                <div className="mid-row row">
                    <div className="mid-row-section border-r col-lg-4 col-md-4 col-sm-4">
                       <Link exact to="/about"> <a className="icon-address" href="/about">
                            <i className="fas fa-address-card fa-6x"></i> 
                            <h2 className="mid-heading">About</h2>
                            <p className="mid-paragraph">You can learn more about me and where/why/what I pursued as education.</p>
                        </a></Link>
                    </div>
                    <div className="mid-row-section border-r col-lg-4 col-md-4 col-sm-4">
                       <Link exact to="/skills"> <a className="icon-address" href="/skills">
                            <i className="fas fa-laptop-code fa-6x"></i>  
                            <h2 className="mid-heading">Skills</h2>
                            <p className="mid-paragraph">Information pertaining to my skill set and technology stack.</p>
                        </a></Link>
                    </div>
                    <div className="mid-row-section col-lg-4 col-md-4 col-sm-4">
                        <Link exact to="/leisure"><a className="icon-address" href="/leisure">
                            <i className="fas fa-chess-knight fa-6x"></i> 
                            <h2 className="mid-heading">Leisure</h2>
                            <p className="mid-paragraph">I love playing sports during free time. As a developer, it is important to relax and find time for yourself!</p>
                        </a></Link>
                    </div>
                </div>
            </section>
    )
}

export default HomeInformation;