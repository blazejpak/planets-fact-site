import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const EarthPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "earth");

  return (
    <div>
      <PlanetInfo data={dataPlanet} color="#6D2ED5" />
    </div>
  );
};

export default EarthPage;
