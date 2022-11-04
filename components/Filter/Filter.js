import { TbSearch } from "react-icons/tb";
import { useEffect, useState } from "react";
import classes from "./Filter.module.scss";

export default function Filter() {
  const [region, setRegion] = useState("all");

  return (
    <form className={classes.filter__form} action="">
      <TbSearch className={classes.filter__icon} />
      <input
        className={classes.filter__search}
        type="text"
        placeholder="Search for a country..."
      />
      <select name="Filter by Region" id="cars">
        <option value="all">All</option>
        <option value="region/africa">Africa</option>
        <option value="region/america">America</option>
        <option value="region/asia">Asia</option>
        <option value="region/europe">Europe</option>
        <option value="region/ocenia">Ocenia</option>
      </select>
    </form>
  );
}
