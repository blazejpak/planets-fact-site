import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const HomePage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "mercury");
  const color = "#419EBB";
  // console.log(arrNrPlanet);
  // // const {geology,images,name,overiview}

  return (
    <div>
      <PlanetInfo data={dataPlanet} colorContentactive={color} />
    </div>
  );
};

export default HomePage;
