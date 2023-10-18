import Button from "../components/Button";
import "../index.css";
import "./SectionWorkflow.css";

const workflowStages = [
  {
    number: "01",
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const SectionWorkflow = () => {
  return (
    <section className="workflow">
      <h2>How it works</h2>
      <div class="workflow__progress">
        <div class="workflow__circle"></div>
        <div class="workflow__circle"></div>
        <div class="workflow__circle"></div>
      </div>
      <div>
        {workflowStages.map((stage) => (
          <div key={stage.title}>
            <div>{stage.number}</div>
            <div>{stage.title}</div>
            <div>{stage.description}</div>
          </div>
        ))}
      </div>
      <a href="/create-plan.html">
        <Button>Create your plan</Button>
      </a>
    </section>
  );
};

export default SectionWorkflow;
