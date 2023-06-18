import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const MarsPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "mars");

  return (
    <div>
      <PlanetInfo data={dataPlanet} />
    </div>
  );
};

export default MarsPage;
