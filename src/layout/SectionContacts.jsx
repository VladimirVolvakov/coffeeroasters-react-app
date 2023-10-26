import HeadquarterCard from "../components/HeadquarterCard";
import { headquarters } from "../data/aboutUsPageData";
import "../index.css";
import "./SectionContacts.css";

const SectionContacts = () => {
  return (
    <section className="contacts">
      <h2>Our headquarters</h2>
      <div>
        {headquarters.map((headquarter) => (
          <HeadquarterCard key={headquarter.city} headquarter={headquarter} />
        ))}
      </div>
    </section>
  );
};

export default SectionContacts;
