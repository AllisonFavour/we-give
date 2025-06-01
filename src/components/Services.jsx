import FoodIcon from "../assets/icons/ep_food.png";
import BookIcon from "../assets/icons/book-icon.png";
import HospitalIcon from "../assets/icons/hospital-icon.png";

export default function Services() {
  return (
    <>
      <section className="px-6 py-6 bg-gray-100">
        <h2 className="text-center text-neutral-500 mb-1">Our Services</h2>
        <h3 className="text-center text-2xl font-bold text-green-950 mb-10">
          What we do
        </h3>

        <div className="flex flex-col gap-6 md:flex-row md:gap-10 justify-center items-center">
          <div className="px-8 py-6 pt-24 my-6 bg-white rounded-lg relative shadow-md">
            <div className="w-30 h-30 rounded-full bg-yellow-100 border-gray-100 border-8 flex items-center justify-center shrink-0 absolute -top-7 -right-3.5">
              <img
                src={FoodIcon}
                alt="Food Icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            <p className="text-black text-2xl font-bold my-4">
              Fighting Hunger
            </p>
            <p className="text-black text-sm">
              We provide nutritious meals and food supplies to families facing
              hunger, ensuring no one goes to bed hungry
            </p>
          </div>

          <div className="px-8 py-6 pt-24 my-6 bg-white rounded-lg relative shadow-md">
            <div className="w-30 h-30 rounded-full bg-yellow-100 border-gray-100 border-8 flex items-center justify-center shrink-0 absolute -top-7 -right-3.5">
              <img
                src={BookIcon}
                alt="Book Icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            <p className="text-black text-2xl font-bold my-4">
              Educational Support
            </p>
            <p className="text-black text-sm">
              We provide access to quality education for underprivileged
              children, especially in rural and low-income communities.
            </p>
          </div>

          <div className="px-8 py-6 pt-24 my-6 bg-white rounded-lg relative shadow-md">
            <div className="w-30 h-30 rounded-full bg-yellow-100 border-gray-100 border-8 flex items-center justify-center shrink-0 absolute -top-7 -right-3.5">
              <img
                src={HospitalIcon}
                alt="Hospital Icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            <p className="text-black text-2xl font-bold my-4">
              Healthcare Access{" "}
            </p>
            <p className="text-black text-sm">
              We deliver essential medical care, clean water, and wellness
              programs to underserved communities in nee
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
