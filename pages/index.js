import Filter from "../components/Filter/Filter";
import Countries from "../components/Countries/Countries";

export default function Home() {
  return (
    <div className="container">
      <Filter />
      <Countries region='asia' filter='india'/>
    </div>
  );
}
