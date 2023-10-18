import "../index.css";
import "./WorkflowStage.css";

const WorkflowStage = ({ number, title, description }) => {
  return (
    <div className="workflow-stage__card">
      <div className="heading-xl workflow-stage__number">{number}</div>
      <div className="heading-md workflow-stage__title">{title}</div>
      <div className="font-body">{description}</div>
    </div>
  );
};

export default WorkflowStage;
