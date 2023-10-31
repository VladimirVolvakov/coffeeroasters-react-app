import "../index.css";
import "./WorkflowStage.css";

const WorkflowStage = ({ number, title, description, type }) => {
  return (
    <div className="workflow-stage__card">
      <div className="heading-xl workflow-stage__number">{number}</div>
      <div className={`heading-md workflow-stage__title ${type === "dark" ? "workflow-stage__title--dark" : ""}`}>{title}</div>
      <div className={`font-body workflow-stage__description ${type === "dark" ? "workflow-stage__description--dark" : ""}`}>{description}</div>
    </div>
  );
};

export default WorkflowStage;
