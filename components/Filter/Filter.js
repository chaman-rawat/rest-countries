import { useRef } from "react";
import { TbSearch } from "react-icons/tb";
import DropDown from "./DropDown";
import classes from "./Filter.module.scss";

export default function Filter(props) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];
  const inputRef = useRef();
  const inputChangeHandler = (event) => {
    event.preventDefault();
    const currentVal = inputRef.current.value.trim().toLowerCase();
    props.onFilter((prev) => {
      return { region: prev.region, filter: currentVal };
    });
  };

  const selectChangeHandler = (region) => {
    props.onFilter((prev) => {
      return { region: region.toLowerCase(), filter: prev.filter };
    });
  };

  return (
    <form className={classes.filter__form} onSubmit={inputChangeHandler}>
      <TbSearch className={classes.filter__icon} />
      <input
        ref={inputRef}
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
