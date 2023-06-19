import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const HomePage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "mercury");

  return (
    <div>
      <PlanetInfo data={dataPlanet} color="mercury" />
    </div>
  );
};

export default HomePage;
