import "./SectionFeatures.css";
import { featuresList } from "../data/indexPageData";
import FeatureItem from "../components/FeatureItem";

const SectionFeatures = () => {
  return (
    <section>
      <div>
        <h2>Why choose us</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div>
          {featuresList.map((feature) => (
            <FeatureItem
              key={feature.title}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
