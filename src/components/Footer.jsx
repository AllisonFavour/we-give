import Subscribe from "./Subscribe";

import InstagramIcon from "../assets/icons/instagram.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";
import XIcon from "../assets/icons/x.png";
import FacebookIcon from "../assets/icons/facebook.png";

export default function Footer() {
  return (
    <>
      <footer>
        <Subscribe />

        <div className="bg-gray-800 text-white px-8 py-8">
          <div>
            <h3>WeGive</h3>

            <p>
              We are a nonprofit organization dedicated to changing lives
              through compassion and generosity. Every donation helps us provide
              food, education, healthcare, and hope to those in need.
            </p>
          </div>

          <div>
            <h3>Company</h3>

            <ul>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>

            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Terms and conditons</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>

            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Legal information</a>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
            </ul>
          </div>

          <div>
            {/* <div>
                trilCodes&copy; {Date.now().getFullYear()} WeGive
            </div> */}
            <div>trilCodes&copy; 2025 WeGive</div>
            <div className="flex items-center gap-1">
              <img src={InstagramIcon} alt="Instagram icon" />
              <img src={WhatsappIcon} alt="Whatsapp icon" />
              <img src={XIcon} alt="X/Twitter icon" />
              <img src={FacebookIcon} alt="Facebook icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
