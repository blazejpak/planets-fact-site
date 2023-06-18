import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const UranusPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "uranus");

  return (
    <div>
      <PlanetInfo data={dataPlanet} />
    </div>
  );
};

export default UranusPage;
