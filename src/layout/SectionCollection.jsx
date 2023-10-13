import CollectionItem from "../components/CollectionItem";
import "../index.css";
import "./SectionCollection.css";

const collectionInfo = [
  {
    image: "./assets/home/desktop/image-gran-espresso.png",
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    image: "./assets/home/desktop/image-planalto.png",
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    image: "./assets/home/desktop/image-piccollo.png",
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    image: "./assets/home/desktop/image-danche.png",
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];

const SectionCollection = () => {
  return (
    <section className="collection">
      <div className="collection__heading">
        <h2 className="heading-xxl collection__heading-text">Our collection</h2>
      </div>
      <div className="collection__gallery">
        {collectionInfo.map((item) => (
          <CollectionItem
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionCollection;
