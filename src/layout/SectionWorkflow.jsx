import Button from "../components/Button";
import WorkflowStage from "../components/WorkflowStage";
import "../index.css";
import "./SectionWorkflow.css";
import { workflowStages } from "../data/indexPageData";

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
          <WorkflowStage
            key={stage.title}
            number={stage.number}
            title={stage.title}
            description={stage.description}
          />
        ))}
      </div>
      <a href="/create-plan.html">
        <Button>Create your plan</Button>
      </a>
    </section>
  );
};

export default SectionWorkflow;
