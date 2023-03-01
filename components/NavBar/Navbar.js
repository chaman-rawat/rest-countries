import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import classes from "./Navbar.module.scss";

export default function Navbar(param) {
  return (
    <nav className={`container ${classes.navbar}`}>
      <h1>Where in the world?</h1>
      <strong className={classes.theme__switcher} onClick={param.themeChange}>
        {param.curTheme === "light" ? <FaRegMoon /> : <FaSun />}
        {` ${param.curTheme === "light" ? "Light" : "Dark"} `}
        Mode
      </strong>
    </nav>
  );
}
