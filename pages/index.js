import Filter from "../components/Filter/Filter";
import Countries from "../components/Countries/Countries";
import { useState } from "react";

export default function Home() {
  const [searchData, setSearchData] = useState({ region: "all", filter: "" });

  const filterChangeHandler = (query) => {
    setSearchData(prev => {
      return {region: query, filter: prev.filter};
    })
  };

  // console.log(searchData);
  return (
    <div className="container">
      <Filter onFilter={filterChangeHandler} />
      <Countries region={searchData.region} filter={searchData.filter} />
    </div>
  );
}
