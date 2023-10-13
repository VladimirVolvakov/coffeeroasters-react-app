import "../index.css";
import "./CollectionItem.css";

const CollectionItem = ({ image, title, description }) => {
  return (
    <div className="collection__card">
      <img src={image} alt={title} className="collection__card-img" />
      <div>
        <p className="heading-sm collection__card-title">{title}</p>
        <p className="font-body collection__card-desc">{description}</p>
      </div>
    </div>
  );
};

export default CollectionItem;
