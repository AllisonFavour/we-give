import FaridahImage from "../assets/images/faridah.jpg";
import JohnImage from "../assets/images/john.jpg";
import ElizabethImage from "../assets/images/elizabeth.jpg";

export default function Testimonials() {
  return (
    <>
      <section className="bg-white pt-12">
        <div className="px-6">
          <div className="py-6">
            <h2 className="text-center">Testimonials</h2>
            <h3 className="text-center">What People Say About Us</h3>
          </div>

          <div className="px-4 py-10 border-2 mb-10">
            <div className="flex items-center gap-2">
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
            </div>
            <p>
              I've been supporting this organization for over three years, and
              every donation i have made felt like a meaningful step towards
              creating a better world. From funding education programmes for
              children to providing medical support. I can see the direct impact
              my contributions are making
            </p>

            <div className="flex items-center gap-4 border-t-2 border-t-gray-600 py-4 mt-4">
              <img
                src={FaridahImage}
                alt="An avatar of Faridah smiling"
                className="w-16 h-16 rounded-full"
              />

              <div>
                <span className="block">Faridah Ibrahim</span>
                <span>Donor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
