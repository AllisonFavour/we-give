import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import FaridahImage from "../assets/images/faridah.jpg";
import JohnImage from "../assets/images/john.jpg";
import ElizabethImage from "../assets/images/elizabeth.jpg";
import TestimonialCard from "./TestimonialCard";

const testimonialDetails = [
  {
    id: 1,
    starRating: 5,
    pText:
      "I've been supporting this organization for over three years, and every donation i have made felt like a meaningful step towards creating a better world. From funding education  programmes for children to providing medical support. I can see the direct impact my contributions are making",
    avatarImage: FaridahImage,
    name: "Faridah Ibrahim",
    role: "Donor",
  },
  {
    id: 2,
    starRating: 5,
    pText:
      "I've been supporting this organization for over three years, and every donation i have made felt like a meaningful step towards creating a better world. From funding education  programmes for children to providing medical support. I can see the direct impact my contributions are making",
    avatarImage: ElizabethImage,
    name: "Elizabeth Daniels",
    role: "Volunteer",
  },
  {
    id: 3,
    starRating: 5,
    pText:
      "I've been supporting this organization for over three years, and every donation i have made felt like a meaningful step towards creating a better world. From funding education  programmes for children to providing medical support. I can see the direct impact my contributions are making",
    avatarImage: JohnImage,
    name: "John Snow",
    role: "Donor",
  },
  {
    id: 4,
    starRating: 5,
    pText:
      "I've been supporting this organization for over three years, and every donation i have made felt like a meaningful step towards creating a better world. From funding education  programmes for children to providing medical support. I can see the direct impact my contributions are making",
    avatarImage: ElizabethImage,
    name: "Amaka Kenneth",
    role: "Volunteer",
  },
  {
    id: 5,
    starRating: 5,
    pText:
      "I've been supporting this organization for over three years, and every donation i have made felt like a meaningful step towards creating a better world. From funding education  programmes for children to providing medical support. I can see the direct impact my contributions are making",
    avatarImage: FaridahImage,
    name: "Jane Doe",
    role: "Donor",
  },
  {
    id: 6,
    starRating: 5,
    pText:
      "I've been supporting this organization for over three years, and every donation i have made felt like a meaningful step towards creating a better world. From funding education  programmes for children to providing medical support. I can see the direct impact my contributions are making",
    avatarImage: JohnImage,
    name: "Mr. Bean",
    role: "Sponsor",
  },
];

export default function Testimonials() {
  const paginationRef = useRef(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    // Trigger render once the pagination DOM is mounted
    setIsSwiperReady(true);
  }, []);

  return (
    <>
      <section className="bg-white pt-12">
        <div className="px-6">
          <div className="text-center py-4 mb-6">
            <h2 className="text-neutral-500 mb-1">Testimonials</h2>
            <h3 className="text-2xl font-bold text-green-950">
              What People Say About Us
            </h3>
          </div>

          {/* <div className="px-4 py-8 border-2 mb-10">
            <div className="flex items-center gap-2 mb-2">
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
              <img src="/star.svg" alt="A star icon" />
            </div>
            <p>
              I've been supporting this organization for over three years, and
              every donation i have made felt like a meaningful step towards
              creating a better world. From funding education programmes for
              children to providing medical support. I can see the direct impact
              my contributions are making
            </p>

            <div className="flex items-center gap-4 border-t-2 border-t-gray-600 py-4 mt-4">
              <img
                src={FaridahImage}
                alt="An avatar of Faridah smiling"
                className="w-16 h-16 rounded-full"
              />

              <div>
                <span className="block">Faridah Ibrahim</span>
                <span>Donor</span>
              </div>
            </div>
          </div> */}
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
                1024: { slidesPerView: 3.5 },
              }}
              className="mySwiper"
            >
              {testimonialDetails.map((tDetail) => (
                <SwiperSlide key={tDetail.id}>
                  <TestimonialCard
                    starRating={tDetail.starRating}
                    pText={tDetail.pText}
                    avatarImage={tDetail.avatarImage}
                    name={tDetail.name}
                    role={tDetail.role}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div
            ref={paginationRef}
            className="custom-swiper-pagination my-6 flex justify-center"
          />

          {/* {testimonialDetails.map((tDetail) => (
            <TestimonialCard
              key={tDetail.id}
              starRating={tDetail.starRating}
              pText={tDetail.pText}
              avatarImage={tDetail.avatarImage}
              name={tDetail.name}
              role={tDetail.role}
            />
          ))} */}
        </div>
      </section>
    </>
  );
}
