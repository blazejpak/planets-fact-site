import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const JupiterPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "jupiter");

  return (
    <div>
      <PlanetInfo data={dataPlanet} />
    </div>
  );
};

export default JupiterPage;
