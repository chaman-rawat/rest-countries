import "../styles/globals.scss";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar/Navbar";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("savedTheme"));

    if (theme === null && localState !== null) {
      setTheme(localState);
    } else {
      localStorage.setItem("savedTheme", JSON.stringify(theme));
    }
  }, [theme]);

  const onThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <main data-theme={theme}>
      <Navbar themeChange={onThemeChange} curTheme={theme} />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
