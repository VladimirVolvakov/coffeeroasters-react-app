import CollectionItem from "../components/CollectionItem";
import "../index.css";
import "./SectionCollection.css";
import { collectionInfo } from "../data/indexPageData";

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
