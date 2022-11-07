import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import classes from "./Dropdown.module.scss";

export default function DropDown(props) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const selectRegionHandler = (e) => {
    setShowOptions(false);
    const selectedCountry = e.target.innerHTML;

    setSelectedRegion(selectedCountry);
    props.onSelect(selectedCountry);
  };

  const onFilterClickHandler = () => setShowOptions((prev) => !prev);

  return (
    <div>
      <div
        className={`${classes.dropdown} border`}
        onClick={onFilterClickHandler}
      >
        <span>{selectedRegion || props.title}</span>
        <FaChevronDown className={classes.dropdown__icon} />
      </div>
      {showOptions && (
        <ul className={`${classes.dropdown__selection} border`}>
          {props.data.map((option) => (
            <li key={option} onClick={selectRegionHandler}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
