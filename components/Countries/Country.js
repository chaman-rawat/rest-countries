import classes from "./Country.module.scss";

export default function Country() {
  return (
    <div className={classes.Country}>
      <h2>Belgium</h2>
      <ul>
        <li>
          <span>Native Name: </span>
        </li>
        <li>
          <span>Population: </span>
        </li>
        <li>
          <span>Region: </span>
        </li>
        <li>
          <span>Sub Region: </span>
        </li>
        <li>
          <span>Capital: </span>
        </li>
      </ul>
      <ul>
        <li>
          <span>Top Level Domain: </span>
        </li>
        <li>
          <span>Currencies: </span>
        </li>
        <li>
          <span>Languages: </span>
        </li>
      </ul>
      <span>Border Countries: </span> <span>France</span> <span>Germany</span>{" "}
      <span>Netherlands</span>
    </div>
  );
}
