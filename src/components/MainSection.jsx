import MainPic from "../assets/images/children1.jpg";
import HandshakeIcon from "../assets/icons/handshake.png";
import PeopleIcon from "../assets/icons/people.png";
import VolunteerIcon from "../assets/icons/mdi_volunteer.png";
import CalendarIcon from "../assets/icons/calendar.png";

export default function Main() {
  return (
    <>
      <main className="px-4 py-6 mt-20 md:mt-28 overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full relative">
          <img
            className="w-full lg:w-3/5 h-auto rounded-lg object-cover mx-auto lg:mx-0 lg:h-96"
            src={MainPic}
            alt="A picture of children laughing"
          />

          <div
            // className="absolute top-20 md:top-64 lg:top-14 left-1/2 -translate-x-1/2 max-w-lg w-full px-4 flex flex-col items-center gap-2 md:gap-8 lg:gap-14"
            className="absolute top-20 md:top-64 lg:top-12 
  left-1/2 -translate-x-1/2 
  lg:left-[50%] lg:-translate-x-0 
  max-w-lg w-full px-4 
  flex flex-col items-center gap-2 md:gap-8"
          >
            <div className="bg-white/50 p-2 md:p-4 rounded-lg text-left w-full md:max-w-md lg:max-w-xl lg:px-8 lg:py-6">
              <h1 className="font-bold text-base md:text-2xl md:mb-4 lg:text-3xl lg:mb-4">
                Changing Lives with every donation
              </h1>
              <p className="text-xs py-1 md:text-lg lg:text-lg">
                Your generousity provides food, care, and hope to those in need.
                Together, we can make a difference
              </p>
            </div>

            <a
              href="#"
              className="bg-green-700 text-white text-base md:text-lg lg:text-lg rounded-lg w-fit flex gap-2 md:gap-4 px-6 py-2 md:px-10 md:py-4 lg:px-10 lg:py-4 lg:ml-20 hover:bg-green-800 transition-colors duration-300"
            >
              Donate now
              <img
                src="/vector-arrow-right-black.svg"
                alt="right arrow icon for donate now link"
              />
            </a>
          </div>
        </div>

        <div className="bg-yellow-500 mt-8 md:mt-12 py-4 md:py-8 rounded-lg flex flex-col md:justify-center gap-6 md:flex-row md:gap-10 lg:gap-20 lg:py-8 lg:px-8">
          <div className="flex flex-row items-center justify-around md:gap-8 lg:gap-30">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 lg:w-22 lg:h-22 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                <img
                  src={HandshakeIcon}
                  alt="Icon of a handshake"
                  className="w-6 h-6 lg:w-12 lg:h-12 object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl lg:text-2xl font-bold text-green-950">180+</span>
                <span className="text-xs lg:text-sm text-green-950">Projects done</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-12 h-12 lg:w-22 lg:h-22 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                <img
                  src={PeopleIcon}
                  alt="Icon of people"
                  className="w-6 h-6 lg:w-12 lg:h-12 object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl lg:text-2xl font-bold text-green-950">120+</span>
                <span className="text-xs lg:text-sm text-green-950">Volunteers</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-around md:gap-8 lg:gap-30">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 lg:w-22 lg:h-22 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                <img
                  src={VolunteerIcon}
                  alt="Icon of a volunteer"
                  className="w-6 h-6 lg:w-12 lg:h-12 object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg lg:text-2xl font-bold text-green-950">1700+</span>
                <span className="text-xs lg:text-sm text-green-950">People helped</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-12 h-12 lg:w-22 lg:h-22 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                <img
                  src={CalendarIcon}
                  alt="Icon of a calendar"
                  className="w-6 h-6 lg:w-12 lg:h-12 object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg lg:text-2xl font-bold text-green-950">20+</span>
                <span className="text-xs lg:text-sm text-green-950">Active events</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
