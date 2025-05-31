import children2 from "../assets/images/children2.png";

export default function About() {
  return (
    <>
      <section className="px-6 py-8">
        <h2 className="text-center">About Us</h2>
        <img className="py-10" src={children2} alt="A picture of children laughing" />
        <h3 className="text-center text-xl font-bold py-4">Making a difference together</h3>
        <p>
          We believe that everyone deserves a chance to live with hope, and
          opportunities. we are dedicated to making a meaningful and lasting
          difference in the lives of those in need. Our mission is to provide
          essential resources, empower communities, and create sustainable
          solutions that improve the quality of life for vulnerable individuals
          and families. We focus on addressing critical issues such as hunger,
          clean water, healthcare, education, and emergency relief, working
          tirelessly to ensure no one is left behind.
        </p>
        <div className="flex my-4">
          <a href="#">Read More</a>
          <img
            src='/vector-arrow-right-black.svg'
            alt="An icon of an arrow pointing right"
          />
        </div>
      </section>
    </>
  );
}
