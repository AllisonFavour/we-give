export default function CampaignCard({
  image,
  title,
  description,
  raised,
  goal,
  progress,
}) {
  return (
    <>
      <div 
    //   className="flex flex-col w-[280px] md:w-[320px] bg-white rounded-lg"
    //   className="flex-1 flex flex-col max-w-sm bg-white rounded-lg"
      >
        <img
          src={image}
          alt={title}
          className="rounded-tr-lg rounded-tl-lg"
        />

        <div className="bg-gray-100 px-4 py-4 pb-8 rounded-br-lg rounded-bl-lg">
          <p className="text-black text-base font-bold">
            {title}
          </p>
          <p className="text-neutral-500 text-sm my-2">
            {description}
          </p>

          <div>
            <span className="block text-right text-sm font-bold mb-2">{progress}%</span>
            <img
              src="/progress-bar.svg"
              alt={`Progress bar indicating ${progress} percent`}
              className="w-full"
            />
          </div>

          <div className="flex justify-between my-2">
            <div>
              <span className="text-sm text-neutral-500">Raised</span>{" "}
              <span className="text-black text-base font-bold">${raised}</span>
            </div>
            <div>
              <span className="text-sm text-neutral-500">Goal</span>{" "}
              <span className="text-black text-base font-bold">${goal}</span>
            </div>
          </div>

          <button className="bg-green-700 text-white text-sm px-6 py-2 mt-4 rounded-lg hover:bg-green-800 transition-colors duration-300 cursor-pointer">
            Donate now
          </button>
        </div>
      </div>
    </>
  );
}
