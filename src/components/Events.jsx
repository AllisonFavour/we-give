import Children6 from "../assets/images/children6.jpg";
import Children7 from "../assets/images/children7.jpg";
import Children8 from "../assets/images/children8.jpg";
import Children9 from "../assets/images/children9.jpg";
import EventCard from "./EventCard";

const eventDetails = [
  {
    id: 1,
    image: Children6,
    time: "10:00",
    location: "Lagos, Nigeria",
    pText: "Back to School Giveaway",
  },
  {
    id: 2,
    image: Children7,
    time: "16:00",
    location: "Abuja, Nigeria",
    pText: "Community Walk for Hope",
  },
  {
    id: 3,
    image: Children8,
    time: "09:00",
    location: "Lagos, Nigeria",
    pText: "Health and Wellness Awareness Outreach",
  },
  {
    id: 4,
    image: Children9,
    time: "12:00",
    location: "Akwa Ibom, Nigeria",
    pText: "Sponsor a Child Day",
  },
];

export default function Events() {
  return (
    <>
      <section className="px-6 bg-white">
        <div className="text-center py-4">
          <span className="block text-center text-neutral-500 mb-1">
            Get Involved
          </span>
          <h2 className="text-center text-2xl font-bold text-green-950 mb-4">
            Events
          </h2>
          {/* <h3 className="text-center text-lg font-bold text-green-950 mb-6">
            Ready to join our Latest Events?
          </h3> */}
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-stretch gap-4">
          <div className="text-center md:text-left md:flex-1 md:pt-10">
            <h3 className="text-center md:text-left text-lg md:text-2xl font-bold text-green-950 mb-6">
              Ready to join our Latest Events?
            </h3>

            <p className="text-base">
              Are you ready to make a lasting impact? Our upcoming events are
              more than just opportunities to get involved—they are chances to
              help shape the future.
            </p>

            <p className="hidden text-base md:block md:my-10">
              Whether you're volunteering your time, participating in exciting
              activities, or making a generous donation, your support directly
              contributes to changing lives. Together, we can raise awareness,
              offer resources, and create lasting change for those in need.
            </p>

            <div className="hidden md:block text-center mt-4 md:text-left">
              <button className="bg-green-700 text-white text-lg px-10 py-4 mt-4 rounded-sm">
                Discover now
              </button>
            </div>
          </div>

          <div className="bg-white grid grid-cols-2 mt-4 rounded-lg gap-4 flex-1">
            {eventDetails.map((eventDetail) => (
              <EventCard
                key={eventDetail.id}
                image={eventDetail.image}
                time={eventDetail.time}
                location={eventDetail.location}
                pText={eventDetail.pText}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:hidden">
          <button className="bg-green-700 text-white text-sm px-6 py-2 mt-4 rounded-sm">
            Discover now
          </button>
        </div>
      </section>
    </>
  );
}
