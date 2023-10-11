import "./Button.css";

const Button = ({ children, isDisabled }) => {
  return (
    <button
      className={`btn {isDisabled ? "btn-disabled" : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
