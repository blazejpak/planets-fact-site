import data from "../data/data.json";
import PlanetInfo from "../components/PlanetInfo";

const VenusPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "earth");

  return (
    <div>
      <PlanetInfo data={dataPlanet} color="#EDA249" />
    </div>
  );
};

export default VenusPage;
