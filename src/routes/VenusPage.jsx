import data from "../data/data.json";
import PlanetInfo from "../components/PlanetInfo";

const VenusPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "venus");

  return <PlanetInfo data={dataPlanet} />;
};

export default VenusPage;
