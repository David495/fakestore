import style from "./button.module.css";

function Button({ children }) {
  return <button className={style.btn}>{children}</button>;
}

export default Button;