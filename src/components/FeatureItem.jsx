import "../index.css";
import "./FeatureItem.css";

const FeatureItem = ({ image, title, description }) => {
  return (
    <div className="feature__item">
      <img src={image} alt={title} className="feature__image" />
      <div className="feature__text">
        <h3 className="heading-sm feature__title">{title}</h3>
        <p className="font-body feature__desc">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
