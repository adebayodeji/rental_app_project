import AppLogo from "./AppLogo"
import twitterLogo from "../../assets/twitter.svg"
import facebookLogo from "../../assets/facebook.svg"
import instaLogo from "../../assets/instagram.svg"
import youtubeLogo from "../../assets/youtube.svg"

function AppFooter () {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div id='footer-first'>
                        <div id='footer-about-app'>
                            <div id='footer-desc'>
                                <AppLogo />
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique officia expedita maiores exercitationem nobis repellendus, 
                                    animi sed ipsum enim alias, iusto beatae quaerat est reprehenderit magni nulla tenetur nam odit.
                                </p>
                            </div>
                            <div id='social-media'>
                                <img src={facebookLogo} alt="facebook Logo" width="20" height="20"/>
                                <img src={twitterLogo} alt="twitter Logo" width="20" height="20"/>
                                <img src={instaLogo} alt="insta Logo" width="20" height="20"/>
                                <img src={youtubeLogo} alt="youtube Logo" width="20" height="20"/>
                            </div>
                        </div>
                        
                    
                        <div id="footer-app-use">
                            <ul>
                                <li>COMPANY</li>
                                <li>Home</li>
                                <li>About</li>
                                <li>Community</li>
                                <li>Newsletter</li>
                            </ul>
                            <ul>
                                <li>Support</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                                <li>Sitemap</li>
                            </ul>
                            <ul>
                                <li>Leasing</li>
                                <li>Lease your home</li>
                                <li>Lease responsibly</li>
                            </ul>
                        </div>
                    </div>
                    <div id="footer-second">
                        <p>&#169; Eco landscaping services All rights reserved</p>
                        <p>Privacy policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default AppFooter