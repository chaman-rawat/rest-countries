import { TbSearch } from "react-icons/tb";
import DropDown from "./DropDown";
import classes from "./Filter.module.scss";

export default function Filter(props) {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "All"];

  const selectChangeHandler = (region) => {
    props.onFilter(region);
  };

  return (
    <form className={classes.filter__form} action="">
      <TbSearch className={classes.filter__icon} />
      <input
        className={`${classes.filter__search} border`}
        type="text"
        placeholder="Search for a country..."
      />

      <DropDown
        title="Filter by Region"
        data={regions}
        onSelect={selectChangeHandler}
      />
    </form>
  );
}