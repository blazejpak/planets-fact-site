import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const UranusPage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "uranus");

  return (
    <div>
      <PlanetInfo data={dataPlanet} color="#1EC1A2" />
    </div>
  );
};

export default UranusPage;
