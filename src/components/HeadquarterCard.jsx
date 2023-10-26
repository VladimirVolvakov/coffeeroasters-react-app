import "../index.css";
import "./HeadquarterCard.css";

const HeadquarterCard = ({ headquarter }) => {
  return (
    <div>
      <img src={headquarter.image} alt={headquarter.imageDesc} />
      <div>
        <h3>{headquarter.country}</h3>
        <div>
          <address>
            {headquarter.address}
            <br />
            {headquarter.city} <br />
            {headquarter.region}
          </address>
          <a href={`tel:${headquarter.phoneForLink}`}>{headquarter.phone}</a>
        </div>
      </div>
    </div>
  );
};

export default HeadquarterCard;
