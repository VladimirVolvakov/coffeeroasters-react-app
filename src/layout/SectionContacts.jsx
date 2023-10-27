import HeadquarterCard from "../components/HeadquarterCard";
import { headquarters } from "../data/aboutUsPageData";
import "../index.css";
import "./SectionContacts.css";

const SectionContacts = () => {
  return (
    <section className="contacts">
      <h2 className="heading-sm contacts__heading">Our headquarters</h2>
      <div className="contacts__headquarters">
        {headquarters.map((headquarter) => (
          <HeadquarterCard key={headquarter.city} headquarter={headquarter} />
        ))}
      </div>
    </section>
  );
};

export default SectionContacts;
