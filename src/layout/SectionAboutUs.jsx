import "../index.css";
import "./SectionAboutUs.css";

const SectionAboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__text-container">
        <h1 className="heading-lg about-us__heading">About Us</h1>
        <p className="font-body about-us__subheading">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
};

export default SectionAboutUs;
