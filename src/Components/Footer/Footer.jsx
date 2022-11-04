import '../../css/footer.css';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    
    const statement = "Copyright "  + new Date().getFullYear() + ". Powered By React ";

    return (
        <div className="footer">
            <section id="footer">
                <section id="footer-section">
                    <div className="low-row row">
                        <div className="copyright-row col-lg-12">
                            <img className="abdullah-logo" src={require("../../assets/images/abdullahLogo.png")} alt="Missing Asset" />
                        </div>
                    </div>
                    <div className="footer-icon row row">
                        <div className="footer-icon-row col-lg-12">
                            <a href="https://www.instagram.com/kingabdul_95" target="_blank" rel="noreferrer"><img className="footer-social" src={require("../../assets/images/instagram.png")} alt="Missing Asset" /></a>
                            <a href="https://github.com/CodingAbdullah" target="_blank" rel="noreferrer"><img className="footer-social" src={require("../../assets/images/github.png")} alt="Missing Asset" /></a>
                            <p className="copyright-paragraph">{statement} <img className="react-logo" src={logo} alt="logo" /></p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Footer;