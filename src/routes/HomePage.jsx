import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const HomePage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "mercury");
  // console.log(arrNrPlanet);
  // // const {geology,images,name,overiview}

  console.log(dataPlanet);

  return (
    <div>
      <h1>Changed</h1>
      <PlanetInfo data={dataPlanet} />
    </div>
  );
};

export default HomePage;
