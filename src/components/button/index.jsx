import { classes } from "@/utils/classes";
import styles from "./styles.module.css";

function Button({ children, variant = "ghost", ...rest }) {
  const classNames = classes(styles.button, styles[variant]);
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}

export { Button };
