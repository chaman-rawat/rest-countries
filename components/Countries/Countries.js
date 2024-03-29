import Link from "next/link";
import { useEffect, useState } from "react";

import classes from "./Countries.module.scss";

export default function Countries({ region, filter }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCountries();
  }, [region, filter]);

  const getCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        filter === ""
          ? `https://restcountries.com/v2/${
              region == "all" ? "all" : `region/${region}`
            }`
          : `https://restcountries.com/v2/name/${filter}`
      );

      if (!response.ok) {
        setCountries([]);
        throw new Error("Error Occured!");
      }

      const data = (await response.json()).sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setCountries([...data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={classes.loader_background}>
        <div class={classes.loader}></div>
      </div>
    );
  }

  if (countries.length === 0) {
    return <p>No result Found ...</p>;
  }

  return (
    <>
      <section className={classes.countries}>
        {countries
          .filter(
            (country) =>
              region === "all" || country.region.toLowerCase() === region
          )
          .map((country) => (
            <div
              key={country.name.toString()}
              className={`${classes.country} border`}
            >
              <Link href={country.alpha3Code}>
                <picture>
                  <img
                    className={classes.country__flag}
                    src={country.flags.svg}
                    alt={country.name}
                  />
                </picture>
                <h2
                  title={country.name.official}
                  className={classes.country__title}
                >
                  {country.name}
                </h2>
                <ul className={classes.country__details}>
                  <li>
                    <span>Population:</span> {country.population}
                  </li>
                  <li>
                    <span>Region:</span> {country.region}
                  </li>
                  <li>
                    <span>Capital:</span> {country.capital}
                  </li>
                </ul>
              </Link>
            </div>
          ))}
      </section>
    </>
  );
}
