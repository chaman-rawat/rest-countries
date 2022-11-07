import { FaRegMoon } from "react-icons/fa";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={`container ${classes.navbar}`}>
      <h1>Where in the world?</h1>
      <strong className={classes.theme__switcher}>
        <FaRegMoon /> Dark Mode
      </strong>
    </nav>
  );
}
