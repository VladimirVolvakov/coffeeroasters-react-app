import "./CollectionItem.css";

const CollectionItem = ({ image, title, description }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CollectionItem;
