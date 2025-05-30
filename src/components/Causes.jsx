import ChildInHospital from "../assets/images/children3.jpg";

export default function Causes() {
  return (
    <>
      <section className="px-6 py-6 bg-white">
        <h2 className="text-center">Causes</h2>
        <h3 className="text-center">Ongoing Campaigns</h3>

        <div className="py-6 my-6 bg-white rounded-lg">
          <img
            src={ChildInHospital}
            alt="Child in Hospital"
            className="rounded-tr-lg rounded-tl-lg"
          />

          <div className="bg-gray-200 px-4 py-6 rounded-br-lg rounded-bl-lg">
            <p>Give hope to children with cancer</p>
            <p>
              Provide cancer treatment, medications, and emotional support to
              children
            </p>

            <div>
              <span className="block text-right">78%</span>
              <img
                src="/progress-bar.svg"
                alt="Progress bar indicating 78 percent"
                className="w-full"
              />
            </div>

            <div className="flex justify-between">
              <div><span>Raised</span> <span>$3,578</span></div>
              <div><span>Goal</span> <span>$5,000</span></div>
            </div>

            <button className="bg-green-700 text-white text-sm px-6 py-2 mt-4 rounded-md">
                Donate now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
