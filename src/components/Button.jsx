import styles from "./Button.module.css";

const Button = ({ children, isDisabled }) => {
  return (
    <button
      className={`${styles.btn} ${
        isDisabled ? `${styles["btn-disabled"]}` : ""
      }`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
