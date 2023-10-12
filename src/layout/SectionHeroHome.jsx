import Button from "../components/Button";
import "../index.css";
import "./SectionHeroHome.css";

const SectionHeroHome = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="heading-xl hero__heading">Great coffee made simple.</h1>
        <p className="font-body hero__subheading">
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <a href="/create-plan.html">
          <Button>Create your plan</Button>
        </a>
      </div>
    </section>
  );
};

export default SectionHeroHome;
