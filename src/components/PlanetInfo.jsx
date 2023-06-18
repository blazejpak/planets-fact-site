import React, { useState } from "react";

const PlanetInfo = ({ data, colorContentactive }) => {
  const [planetContentActive, setPlanetContentActive] = useState("overview");

  let sourcePlanet;
  if (planetContentActive === "overview") sourcePlanet = data.images.planet;
  else if (planetContentActive === "structure")
    sourcePlanet = data.images.internal;
  else sourcePlanet = data.images.geology;

  console.log(planetContentActive, colorContentactive);

  return (
    <main>
      <div className=" border-b border-white/20 font-['spartan league'] tracking-[2px] font-bold text-[9px] h-[50px] flex uppercase text-white px-6 gap-11 justify-center items-center">
        <div
          className={`relative ${
            planetContentActive === "overview"
              ? `before:absolute  before:bottom-0 before:h-[4px] before:w-full before:bg-[${colorContentactive}]`
              : ""
          } cursor-pointer h-full flex justify-center items-center`}
          onClick={() => setPlanetContentActive("overview")}
        >
          <h3>overview</h3>
        </div>
        <div
          className={`relative
            ${
              planetContentActive === "structure"
                ? `before:absolute  before:bottom-0 before:h-[4px] before:w-full before:bg-[${colorContentactive}] `
                : ""
            } cursor-pointer h-full flex justify-center items-center`}
          onClick={() => setPlanetContentActive("structure")}
        >
          <h3>structure</h3>
        </div>

        <div
          className={`relative
            ${
              planetContentActive === "surface"
                ? `before:absolute  before:bottom-0 before:h-[4px] before:w-full before:bg-[${colorContentactive}] `
                : ""
            } +  cursor-pointer h-full flex justify-center items-center`}
          onClick={() => setPlanetContentActive("surface")}
        >
          <h3>surface</h3>
        </div>
      </div>
      {/* <div className=" my-24">
        <img
          src={`.${sourcePlanet}`}
          className=" h-[111px] w-[111px] mx-auto"
        />
      </div> */}
      <div></div>
    </main>
  );
};

export default PlanetInfo;
