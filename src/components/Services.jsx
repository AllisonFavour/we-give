import FoodIcon from "../assets/icons/ep_food.png";
import BookIcon from "../assets/icons/book-icon.png";
import HospitalIcon from "../assets/icons/hospital-icon.png";

export default function Services() {
  return (
    <>
      <section className="px-6 py-6 bg-gray-300">
        <h2 className="text-center">Our Services</h2>
        <h3 className="text-center">What we do</h3>

        <div className="px-4 py-6 my-6 bg-white rounded-lg">
          <div className="w-30 h-30 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
            <img
              src={FoodIcon}
              alt="Food Icon"
              className="w-16 h-16 object-contain"
            />
          </div>

          <p>Fighting Hunger</p>
          <p>
            We provide nutritious meals and food supplies to families facing
            hunger, ensuring no one goes to bed hungry
          </p>
        </div>

        <div className="px-4 py-6 my-6 bg-white rounded-lg">
          <div className="w-30 h-30 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
            <img
              src={BookIcon}
              alt="Book Icon"
              className="w-16 h-16 object-contain"
            />
          </div>

          <p>Educational Support</p>
          <p>
            We provide access to quality education for underprivileged children,
            especially in rural and low-income communities.
          </p>
        </div>

        <div className="px-4 py-6 my-6 bg-white rounded-lg">
          <div className="w-30 h-30 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
            <img
              src={HospitalIcon}
              alt="Hospital Icon"
              className="w-16 h-16 object-contain"
            />
          </div>

          <p>Healthcare Access </p>
          <p>
            We deliver essential medical care, clean water, and wellness
            programs to underserved communities in nee
          </p>
        </div>
      </section>
    </>
  );
}
