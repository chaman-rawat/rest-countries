import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

import classes from "./Country.module.scss";

export default function Country({ countryData }) {
  const router = useRouter();

  return (
    <div className={`container ${classes.main_content}`}>
      <div
        className={`border ${classes.back_button}`}
        onClick={() => router.back()}
      >
        <BsArrowLeft className={classes.back_button__icon}></BsArrowLeft>Back
      </div>

      <div className={classes.country}>
        <div>
          <img
            src={countryData.flag}
            alt={countryData.name}
            className={classes.flag}
          />
        </div>

        <div className={classes.country__details}>
          <h2>{countryData.name}</h2>
          <ul>
            <li>
              <strong>Native Name: </strong> {countryData.nativeName}
            </li>
            <li>
              <strong>Population: </strong> {countryData.population}
            </li>
            <li>
              <strong>Region: </strong> {countryData.region}
            </li>
            <li>
              <strong>Sub Region: </strong> {countryData.subRegion}
            </li>
            <li>
              <strong>Capital: </strong> {countryData.capital}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Top Level Domain: </strong> {countryData.topLevelDomain}
            </li>
            <li>
              <strong>Currencies: </strong> {countryData.currencies}
            </li>
            <li>
              <strong>Languages: </strong> {countryData.languages}
            </li>
          </ul>
          <div>
            <strong>Border Countries: </strong>
            {countryData.borders.map((border) => (
              <span key={border}>{border}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
