import MainPic from "../assets/images/children1.jpg";
import HandshakeIcon from "../assets/icons/handshake.png";
import PeopleIcon from "../assets/icons/people.png";
import VolunteerIcon from "../assets/icons/mdi_volunteer.png";
import CalendarIcon from "../assets/icons/calendar.png";

export default function Main() {
  return (
    <>
      <main className="px-4 py-6">
        <div>
          <img
            className="rounded-lg"
            src={MainPic}
            alt="A picture of children laughing"
          />
        </div>

        <div className="bg-yellow-500 grid grid-cols-2 md:grid-cols-4 mt-4 rounded-lg p-2 py-4 gap-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
              <img
                src={HandshakeIcon}
                alt="Icon of a handshake"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-green-950">180+</span>
              <span className="text-xs  text-green-950">Projects done</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
              <img
                src={PeopleIcon}
                alt="Icon of people"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-green-950">120+</span>
              <span className="text-xs  text-green-950">Volunteers</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
              <img
                src={VolunteerIcon}
                alt="Icon of a volunteer"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-green-950">1700+</span>
              <span className="text-xs  text-green-950">People helped</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
              <img
                src={CalendarIcon}
                alt="Icon of a calendar"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-green-950">20+</span>
              <span className="text-xs  text-green-950">Active events</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
