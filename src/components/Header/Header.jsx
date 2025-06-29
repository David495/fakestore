import style from "./header.module.css";
import Button from "../Button/button";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>Fake Store Ltd.</div>

      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <Button>Sign In</Button>
      </nav>
    </header>
  );
}