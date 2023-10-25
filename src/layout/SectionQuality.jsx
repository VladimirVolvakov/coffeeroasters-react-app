import "../index.css";
import "./SectionQuality.css";

const SectionQuality = () => {
  return (
    <section className="quality">
        <div className="quality__text-container">
          <h2 className="heading-lg quality__heading">Uncompromising quality</h2>
          <p className="font-body quality__description">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <div className="quality__image"></div>
      </section>
  );
};

export default SectionQuality;