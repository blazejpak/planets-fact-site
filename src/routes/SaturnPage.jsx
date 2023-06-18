import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const SaturnPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "saturn");

  return (
    <div>
      <PlanetInfo data={dataPlanet} />
    </div>
  );
};

export default SaturnPage;
