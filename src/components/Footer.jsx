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
          <div className="flex flex-col  md:flex-row md:justify-around md:items-stretch">
            <div className="py-4">
              <h3 className="text-xl font-bold mb-4">WeGive</h3>

              <p className="text-sm md:max-w-44">
                We are a nonprofit organization dedicated to changing lives
                through compassion and generosity. Every donation helps us
                provide food, education, healthcare, and hope to those in need.
              </p>
            </div>

            <div className="py-4">
              <h3 className="text-xl font-bold mb-4">Company</h3>

              <ul className="">
                <li className="mb-2">
                  <a href="#" className="text-sm">
                    How it works
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm">
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-4">
              <h3 className="text-xl font-bold mb-4">Resources</h3>

              <ul className="">
                <li className="mb-2">
                  <a href="#" className="text-sm">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm">
                    Terms and conditons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-4">
              <h3 className="text-lg font-bold mb-4">Support</h3>

              <ul className="">
                <li className="mb-2">
                  <a href="#" className="text-sm">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm">
                    Legal information
                  </a>
                </li>
                <li className="">
                  <a href="#" className="text-sm">
                    Help center
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-8 px-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="text-lg">trilCodes &copy; {new Date().getFullYear()} WeGive</div>

            <div className="flex items-center gap-4">
              <img src={InstagramIcon} alt="Instagram icon"  />
              <img src={WhatsappIcon} alt="Whatsapp icon"  />
              <img src={XIcon} alt="X/Twitter icon"  />
              <img src={FacebookIcon} alt="Facebook icon"  />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
