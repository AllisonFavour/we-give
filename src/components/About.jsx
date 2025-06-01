import children2 from "../assets/images/children2.png";

export default function About() {
  return (
    <>
      <section className="px-6 py-8">
        <h2 className="text-center">About Us</h2>
        <div className="py-10 flex flex-col items-center md:flex-row md:items-start justify-center gap-4 md:gap-10 lg:gap-20">
          <img
            className="flex-2/5"
            src={children2}
            alt="A picture of children laughing"
          />

          <div className="flex-1/2">
            <h3 className="text-center text-xl font-bold py-4 md:text-left md:text-base lg:text-2xl">
              Making a difference together
            </h3>
            <p className="lg:py-6 md:text-xs lg:text-base">
              We believe that everyone deserves a chance to live with hope, and
              opportunities. we are dedicated to making a meaningful and lasting
              difference in the lives of those in need. Our mission is to
              provide essential resources, empower communities, and create
              sustainable solutions that improve the quality of life for
              vulnerable individuals and families. We focus on addressing
              critical issues such as hunger, clean water, healthcare,
              education, and emergency relief, working tirelessly to ensure no
              one is left behind.
            </p>

            <p className="hidden md:block py-4 lg:py-6 md:text-xs lg:text-base">
              We deliver life-changing programs that offer both immediate relief
              and long-term empowerment. Transparency, accountability, and
              compassion are at the heart of everything we do, ensuring that
              every donation directly impacts those who need it most.
            </p>

            <div className="flex gap-2 my-4">
              <a href="#">Read More</a>
              <img
                src="/vector-arrow-right-black.svg"
                alt="An icon of an arrow pointing right"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
