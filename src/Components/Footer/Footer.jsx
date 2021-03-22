import '../../css/footer.css';

const Footer = () => {
    
    const statement = "Copyright "  + new Date().getFullYear() + ". Powered By React ";

    return (
        <div className="footer">
            <section id="footer">
                <section id="footer-section">
                    <div className="low-row row">
                        <div className="copyright-row col-lg-12">
                            <img className="abdullah-logo" src={require("../../assets/images/abdullahLogo.png").default} alt="Missing Asset" />
                        </div>
                    </div>
                    <div className="footer-icon row row">
                        <div className="footer-icon-row col-lg-12">
                            <a href="https://www.instagram.com/kingabdul_95"><img className="footer-social" src={require("../../assets/images/instagram.png").default} alt="Missing Asset" /></a>
                            <a href="https://ca.linkedin.com"><img className="footer-social" src={require("../../assets/images/linkedin.png").default} alt="Missing Asset" /></a>
                            <p className="copyright-paragraph">{statement} <img className="react-logo" src={require("../../assets/images/logo.svg").default} alt="logo" /></p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Footer;