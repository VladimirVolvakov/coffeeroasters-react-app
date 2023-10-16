import SectionCollection from "../layout/SectionCollection";
import SectionFeatures from "../layout/SectionFeatures";
import SectionHeroHome from "../layout/SectionHeroHome";

const HomePage = () => {
  return (
    <main>
      <SectionHeroHome />
      <SectionCollection />
      <SectionFeatures />
    </main>
  );
};

export default HomePage;
