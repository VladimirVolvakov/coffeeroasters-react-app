import SectionCollection from "../layout/SectionCollection";
import SectionFeatures from "../layout/SectionFeatures";
import SectionHeroHome from "../layout/SectionHeroHome";
import SectionWorkflow from "../layout/SectionWorkflow";

const HomePage = () => {
  return (
    <main>
      <SectionHeroHome />
      <SectionCollection />
      <SectionFeatures />
      <SectionWorkflow />
    </main>
  );
};

export default HomePage;
