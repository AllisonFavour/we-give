export default function EventCard({ image, time, location, pText }) {
  return (
    <>
    
      <div className="mt-6 bg-white rounded-lg">
        <img
          src={image}
          alt="Child in Hospital"
          className="rounded-tr-lg rounded-tl-lg"
        />

        <div className="bg-gray-200 rounded-br-lg rounded-bl-lg py-4 px-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-[0.15rem]">
              <img src="/clock-icon.svg" alt="Clock Icon" className="w-2 h-2" />
              <span className="text-[0.62rem] text-neutral-500">{time}</span>
            </div>

            <div className="flex items-center gap-[0.15rem]">
              <img
                src="/location-icon.svg"
                alt="Location Icon"
                className="w-2 h-2"
              />
              <span className="text-[0.62rem] text-neutral-500">
                {location}
              </span>
            </div>
          </div>

          <p className="text-base font-bold my-2 md:my-4">{pText}</p>

          <a
            href="#"
            className="border-1 border-black text-black text-sm lg:text-lg rounded-lg w-fit flex gap-2 md:gap-2 px-3 py-2 my-2 hover:bg-white transition-colors duration-300"
          >
            Read More
            <img
              src="/vector-arrow-right-black.svg"
              alt="right arrow icon for donate now link"
            />
          </a>
        </div>
      </div>
    </>
  );
}
