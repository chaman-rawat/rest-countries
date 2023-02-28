import Link from "next/link";
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
        <div className={classes.flag}>
          <picture>
            <img src={countryData.flag} alt={countryData.name} />
          </picture>
        </div>

        <div className={classes.country__details}>
          <h2 className={classes.country_name}>{countryData.name}</h2>

          <div className={classes.details__column}>
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
                <strong>Currencies: </strong>{" "}
                {countryData.currencies.join(", ")}
              </li>
              <li>
                <strong>Languages: </strong> {countryData.languages.join(", ")}
              </li>
            </ul>
          </div>

          <div className={classes.borders}>
            <strong>Border Countries: </strong>
            {countryData.borders.map((border) => (
              <Link key={border} href={border}>
                <span className={`border ${classes.border_label}`}>
                  {border}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
