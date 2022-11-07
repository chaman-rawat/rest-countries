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
        `https://restcountries.com/v3.1/${
          region == "all" ? "all" : `region/${region}`
        }`
      );

      if (!response.ok) {
        throw new Error("Error Occured!");
      }

      const data = (await response.json()).sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      console.log(data);
      setCountries([...data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <section className={classes.countries}>
        {countries.map((country) => (
          <article
            key={country.name.common.toString()}
            className={`${classes.country} border`}
          >
            <Link href={country.cca3}>
              <img
                className={classes.country__flag}
                src={country.flags.svg}
                alt={country.name}
              />
              <h2
                title={country.name.official}
                className={classes.country__title}
              >
                {country.name.common}
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
          </article>
        ))}
      </section>
    </>
  );
}
