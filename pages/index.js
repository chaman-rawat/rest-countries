import Filter from "../components/Filter/Filter";
import Countries from "../components/Countries/Countries";
import { useState } from "react";

export default function Home() {
  const [searchData, setSearchData] = useState({ region: "all", filter: "" });

  return (
    <div className="container main_content">
      <Filter onFilter={setSearchData} />
      <Countries region={searchData.region} filter={searchData.filter} />
    </div>
  );
}
