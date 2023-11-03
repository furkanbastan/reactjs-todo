import { classes } from "@/utils/classes";
import styles from "./styles.module.css";

function Input({ variant = "primary", ...rest }) {
  const classNames = classes(styles.input, styles[variant]);
  return <input className={classNames} {...rest} />;
}

export { Input };
