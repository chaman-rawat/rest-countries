import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import classes from "./Dropdown.module.scss";

export default function DropDown(props) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const selectRegionHandler = (e) => {
    setShowOptions(false);
    setSelectedRegion(e.target.innerHTML);
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
          {props.data.map((row) => (
            <li onClick={selectRegionHandler}>{row.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
