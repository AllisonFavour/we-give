import ChildInHospital from "../assets/images/children3.jpg";

export default function Events() {
  return (
    <>
      <section className="px-6 bg-white">
        <div className="text-center py-4">
          <span className="block">Get Involved</span>
          <h2 className="">Events</h2>
          <h3 className="">Ready to join our Latest Events?</h3>
          <p>
            Are you ready to make a lasting impact? Our upcoming events are more
            than just opportunities to get involved—they are chances to help
            shape the future.
          </p>
        </div>

        <div className="bg-white grid grid-cols-2 md:grid-cols-4 mt-4 rounded-lg gap-4">
          <div className="mt-6 bg-white rounded-lg">
            <img
              src={ChildInHospital}
              alt="Child in Hospital"
              className="rounded-tr-lg rounded-tl-lg"
            />

            <div className="bg-gray-200 px-4 py-6 rounded-br-lg rounded-bl-lg">
              <div className="flex justify-between">
                <div>
                  <div>
                    <img src="/clock-icon.svg" alt="Clock Icon" />\
                    <span>10:00am</span>
                  </div>
                </div>

                <div>
                  <div>
                    <img src="/location-icon.svg" alt="Location Icon" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <p>Back to School Giveaway</p>

              <div className="flex">
                <a href="#">Read More</a>
                <img
                  src="/vector-arrow-right-black.svg"
                  alt="An icon of an arrow pointing right"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <img
              src={ChildInHospital}
              alt="Child in Hospital"
              className="rounded-tr-lg rounded-tl-lg"
            />

            <div className="bg-gray-200 px-4 py-6 rounded-br-lg rounded-bl-lg">
              <div className="flex justify-between">
                <div>
                  <div>
                    <img src="/clock-icon.svg" alt="Clock Icon" />\
                    <span>10:00am</span>
                  </div>
                </div>

                <div>
                  <div>
                    <img src="/location-icon.svg" alt="Location Icon" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <p>Community Walk for Hope</p>

              <div className="flex">
                <a href="#">Read More</a>
                <img
                  src="/vector-arrow-right-black.svg"
                  alt="An icon of an arrow pointing right"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg">
            <img
              src={ChildInHospital}
              alt="Child in Hospital"
              className="rounded-tr-lg rounded-tl-lg"
            />

            <div className="bg-gray-200 px-4 py-6 rounded-br-lg rounded-bl-lg">
              <div className="flex justify-between">
                <div>
                  <div>
                    <img src="/clock-icon.svg" alt="Clock Icon" />\
                    <span>10:00am</span>
                  </div>
                </div>

                <div>
                  <div>
                    <img src="/location-icon.svg" alt="Location Icon" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <p>Health and Wellness Awareness Outreach</p>

              <div className="flex">
                <a href="#">Read More</a>
                <img
                  src="/vector-arrow-right-black.svg"
                  alt="An icon of an arrow pointing right"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <img
              src={ChildInHospital}
              alt="Child in Hospital"
              className="rounded-tr-lg rounded-tl-lg"
            />

            <div className="bg-gray-200 px-4 py-6 rounded-br-lg rounded-bl-lg">
              <div className="flex justify-between">
                <div>
                  <div>
                    <img src="/clock-icon.svg" alt="Clock Icon" />\
                    <span>10:00am</span>
                  </div>
                </div>

                <div>
                  <div>
                    <img src="/location-icon.svg" alt="Location Icon" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <p>Sponsor a Child Day</p>

              <div className="flex">
                <a href="#">Read More</a>
                <img
                  src="/vector-arrow-right-black.svg"
                  alt="An icon of an arrow pointing right"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-700 text-white text-sm px-6 py-2 mt-4 rounded-sm">
            Discover now
          </button>
        </div>
      </section>
    </>
  );
}
