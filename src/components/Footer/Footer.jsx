import './Footer.css';
import footerLogo from '/images/logo.png'

function Footer () {
   return(
 <footer className="footer">
            <div className="container">
                <div className="footer_top">
                    <div className="footer_logo">
                        <a href="/" className="logo">
                            <img src={footerLogo} alt="Birdspin Casino neon logo with stylized wings" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    <div className="footer_content">
                        <nav className="nav footer">
                            <ul className="flex">
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="bonuses.html">Bonuses</a></li>
                                <li><a href="licensing.html">Licensing</a></li>
                                <li><a href="tips.html">Tips</a></li>
                                <li><a href="glossary.html">Glossary</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="terms.html">Terms</a></li>
                                <li><a href="mailto:hello@birdspincasino.com">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <h4>18+ Notice</h4>
                    <p>
                        birdspincasino.com does not promote or encourage gambling. All content targets adults aged 18 and over and highlights responsible play tools. birdspincasino.com includes partner links and we may earn commissions when visitors click and complete qualifying actions.
                    </p>

                    <p className="copy">© 2026 birdspincasino.com. All rights reserved</p>
                </div>
            </div>
        </footer>
   )
}

export default Footer;