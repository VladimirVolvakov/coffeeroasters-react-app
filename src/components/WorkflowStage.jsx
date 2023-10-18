import "../index.css";
import "./WorkflowStage.css";

const WorkflowStage = ({ number, title, description }) => {
  return (
    <div>
      <div>{number}</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default WorkflowStage;
