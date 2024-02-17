import AppLogo from "./AppLogoDark";
import twitterLogo from "@/public/twitter.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import instaLogo from "@/public/instagram.svg";
import youtubeLogo from "@/public/youtube.svg";
import Image from "next/image";

function AppFooter() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div id="footer-first">
            <div id="footer-about-app">
              <div id="footer-desc">
                <AppLogo />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique officia expedita maiores exercitationem nobis
                  repellendus, animi sed ipsum enim alias, iusto beatae quaerat
                  est reprehenderit magni nulla tenetur nam odit.
                </p>
              </div>
              <div id="social-media">
                <FacebookIcon className="w-20 h-20" />
                <Image
                  src={twitterLogo}
                  alt="twitter Logo"
                  width="20"
                  height="20"
                />
                <Image
                  src={instaLogo}
                  alt="insta Logo"
                  width="20"
                  height="20"
                />
                <Image
                  src={youtubeLogo}
                  alt="youtube Logo"
                  width="20"
                  height="20"
                />
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
  );
}

export default AppFooter;
