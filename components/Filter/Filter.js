import { TbSearch } from "react-icons/tb";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import classes from "./Filter.module.scss";

export default function Filter() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const regions = [
    {
      name: "Africa",
    },
    {
      name: "America",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
    {
      name: "All",
    },
  ];

  return (
    <form className={classes.filter__form} action="">
      <TbSearch className={classes.filter__icon} />
      <input
        className={`${classes.filter__search} border`}
        type="text"
        placeholder="Search for a country..."
      />
      {/* <select name="Filter by Region" id="cars">
        <option value="all">All</option>
        <option value="region/africa">Africa</option>
        <option value="region/america">America</option>
        <option value="region/asia">Asia</option>
        <option value="region/europe">Europe</option>
        <option value="region/ocenia">Ocenia</option>
      </select> */}

      <DropDown title="Filter by Region" data={regions} />
    </form>
  );
}
