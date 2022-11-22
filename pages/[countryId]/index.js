import Country from "../../components/Countries/Country";

export default function country(props) {
  return <Country countryData={props} />;
}

export async function getStaticPaths() {
  const response = await fetch(`https://restcountries.com/v2/all`);
  const countries = await response.json();

  const paths = countries.map((c) => ({
    params: { countryId: c.alpha3Code.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://restcountries.com/v2/alpha/${context.params.countryId}`
  );

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const flag = data.flag;
  const name = data.name;
  const nativeName = data.nativeName;
  const population = data.population;
  const region = data.region;
  const subRegion = data.subregion;
  const capital = data.capital;
  const topLevelDomain = data.topLevelDomain;
  const currencies = Object.values(data.currencies).map((c) => c.name);
  const languages = data.languages.map((l) => l.name);
  const borders = data.borders;

  // const borders = data.borders.map(async (b) => {
  //   const res = await fetch(`https://restcountries.com/v2/alpha/${b}`);
  //   const d = await response.json();
  //   return d.name;
  // });

  return {
    props: {
      flag,
      name,
      nativeName,
      population,
      region,
      subRegion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    },
  };
}
