import Button from "../components/Button";
import "./SectionHeroHome.css";

const SectionHeroHome = () => {
  return (
    <section>
      <div>
        <h1>Great coffee made simple.</h1>
        <p>
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
