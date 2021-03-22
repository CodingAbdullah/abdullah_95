import '../../css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
            <section id="heading">
                <div class="navbar-row row">
                  <div class="col-md-3 navbar-brand-section">
                    <h3 class="navbar-heading navbar-brand">AbdulM95</h3>
                  </div>
                  <div class="col-md-6 links ml-auto">
                    <Link to="/" exact><a class="link" href="/">Home</a></Link>
                    <Link to="/resume" exact><a class="link" href="/resume">Resume/CV</a></Link>
                    <Link to="/about" exact><a class="link" href="/about">About</a></Link>
                    <Link to="/skills" exact><a class="link" href="/skills">Skills</a></Link>
                    <Link to="/leisure" exact><a class="link" href="/leisure">Leisure</a></Link>
                  </div>
                </div>
            </section>
    )
}

export default Header;