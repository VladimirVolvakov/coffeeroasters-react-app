import styles from "./Button.module.css";

const Button = ({ children, isDisabled }) => {
  return (
    <button
      className={styles.btn}
    >
      {children}
    </button>
  );
};

export default Button;
