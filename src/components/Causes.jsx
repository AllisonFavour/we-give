import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ChildInHospital from "../assets/images/children3.jpg";
import ChildOnWheelChair from "../assets/images/children4.jpg";
import ChildHoldingPaper from "../assets/images/children5.jpg";
import CampaignCard from "./CampaignCard";

const campaigns = [
  {
    id: 1,
    image: ChildInHospital,
    title: "Give hope to children with cancer",
    description:
      "Provide cancer treatment, medications, and emotional support to children",
    raised: 3758,
    goal: 5000,
    progress: 78,
  },
  {
    id: 2,
    image: ChildOnWheelChair,
    title: "Support children with disabilities",
    description:
      "Provide mobility aids and support for children with disabilities",
    raised: 2450,
    goal: 4000,
    progress: 61,
  },
  {
    id: 3,
    image: ChildHoldingPaper,
    title: "Education for underprivileged children",
    description:
      "Provide educational resources and support for underprivileged children",
    raised: 1800,
    goal: 5000,
    progress: 60,
  },
  {
    id: 4,
    image: ChildHoldingPaper,
    title: "Education for underprivileged children",
    description:
      "Provide educational resources and support for underprivileged children",
    raised: 5000,
    goal: 5000,
    progress: 100,
  },
  {
    id: 5,
    image: ChildHoldingPaper,
    title: "Education for underprivileged children",
    description:
      "Provide educational resources and support for underprivileged children",
    raised: 1900,
    goal: 4000,
    progress: 60,
  },
  {
    id: 6,
    image: ChildHoldingPaper,
    title: "Education for underprivileged children",
    description:
      "Provide educational resources and support for underprivileged children",
    raised: 1800,
    goal: 3000,
    progress: 60,
  },
];

export default function Causes() {
  const paginationRef = useRef(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    // Trigger render once the pagination DOM is mounted
    setIsSwiperReady(true);
  }, []);

  return (
    <>
      <section className="px-6 py-6 bg-white">
        <h2 className="text-center text-neutral-500 mb-1">Causes</h2>
        <h3 className="text-center text-2xl font-bold text-green-950 mb-10">
          Ongoing Campaigns
        </h3>


        {isSwiperReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {campaigns.map((campaign) => (
              <SwiperSlide key={campaign.id}>
                <CampaignCard
                  image={campaign.image}
                  title={campaign.title}
                  description={campaign.description}
                  raised={campaign.raised}
                  goal={campaign.goal}
                  progress={campaign.progress}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div
          ref={paginationRef}
          className="custom-swiper-pagination mt-4 flex justify-center"
        />
      </section>
    </>
  );
}
