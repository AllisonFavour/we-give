import RightArrowIcon from '../assets/icons/arrow-right.png'

export default function About() {
    return (
        <>
        <section>
            <h2>About Us</h2>
            <p>
                We believe that everyone deserves a chance to live with hope, and opportunities. we are dedicated to making a meaningful and lasting difference in the lives of those in need. Our mission is to provide essential resources, empower communities, and create sustainable solutions that improve the quality of life for vulnerable individuals and families. We focus on addressing critical issues such as hunger, clean water, healthcare, education, and emergency relief, working tirelessly to ensure no one is left behind.
            </p>
            <a href="#">Read More <img src={RightArrowIcon} alt="An icon of an arrow pointing right" /></a>
        </section>
        </>
    )
}