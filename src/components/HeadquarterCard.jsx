import "../index.css";
import "./HeadquarterCard.css";

const HeadquarterCard = ({ headquarter }) => {
  return (
    <div className="headquarter-card">
      <img src={headquarter.image} alt={headquarter.imageDesc} />
      <div className="headquarter-card__text-container">
        <h3 className="heading-md headquarter-card__title">
          {headquarter.country}
        </h3>
        <div className="font-body">
          <address className="headquarter-card__address">
            {headquarter.address}
            <br />
            {headquarter.city} <br />
            {headquarter.region}
          </address>
          <a
            href={`tel:${headquarter.phoneForLink}`}
            className="headquarter-card__link"
          >
            {headquarter.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeadquarterCard;
