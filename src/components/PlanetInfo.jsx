import React, { useEffect, useState } from "react";
import Source from "../../public/assets/icon-source.svg";

import ErrorPage from "../routes/ErrorPage";

import { motion } from "framer-motion";

const PlanetInfo = ({ data, color }) => {
  const [planetContentActive, setPlanetContentActive] = useState("overview");

  let sourcePlanet;
  if (planetContentActive === "overview") sourcePlanet = data.images.planet;
  else if (planetContentActive === "structure")
    sourcePlanet = data.images.internal;
  else sourcePlanet = data.images.planet;

  let contentText;
  if (planetContentActive === "overview") contentText = data.overview.content;
  else if (planetContentActive === "structure")
    contentText = data.structure.content;
  else contentText = data.geology.content;

  let contentSource;
  if (planetContentActive === "overview") contentSource = data.overview.source;
  else if (planetContentActive === "structure")
    contentSource = data.structure.source;
  else contentSource = data.geology.source;

  return (
    <main>
      {/* links for smartphones */}
      <div className=" md:hidden border-b border-white/20 font-['spartan league'] tracking-[2px] font-bold text-[9px] h-[50px] flex uppercase  px-6 gap-11 justify-center items-center">
        <div
          onClick={() => setPlanetContentActive("overview")}
          className={`relative ${
            planetContentActive === "overview" ? "underline" : ""
          } cursor-pointer h-full flex justify-center items-center`}
        >
          <h2>overview</h2>
        </div>
        <div
          onClick={() => setPlanetContentActive("structure")}
          className={`relative
              ${
                planetContentActive === "structure" ? "underline" : ""
              } cursor-pointer h-full flex justify-center items-center`}
        >
          <h2>structure</h2>
        </div>

        <div
          onClick={() => setPlanetContentActive("surface")}
          className={`relative
              ${
                planetContentActive === "surface" ? "underline" : ""
              }   cursor-pointer h-full flex justify-center items-center`}
        >
          <h2>surface</h2>
        </div>
      </div>

      {/* Images */}
      <div className=" my-24 flex justify-center items-center">
        <motion.div
          className="flex flex-col justify-center items-center"
          whileHover={{
            rotate: 360,
            transition: { repeat: Infinity, duration: 5, ease: "linear" },
          }}
        >
          <img
            src={`.${sourcePlanet}`}
            className="md:h-[184px] md:w-[184px] h-[111px] w-[111px] "
          />
          {planetContentActive === "surface" && (
            <img
              src={data.images.geology}
              className="md:h-[120px] md:w-[96px] h-[80px] w-[65px] translate-y-[-20%]"
            />
          )}
        </motion.div>
      </div>
      {/* Content about planets */}
      <div className="flex  items-center justify-center mx-10 gap-16">
        <div className="flex md:items-start flex-col gap-6 justify-center items-center">
          <h1 className="text-[40px] font-[Antonio] uppercase">{data.name}</h1>
          <p className="text-[11px] md:text-left md:mx-0 text-center mx-6 leading-6">
            {contentText}
          </p>
          <div className="flex gap-1 justify-center items-center opacity-50 text-xs mb-7">
            <p className="font-['League Spartan']">Source :</p>
            <a
              href={contentSource}
              className="underline font-bold flex items-center gap-1"
            >
              Wikipedia
              <img src={Source} className="h-3 w-3" />
            </a>
          </div>
        </div>
        {/* Links to min medium screens */}
        <div className="flex items-start justify-center">
          <div
            className={`hidden md:flex md:flex-col font-['Spartan League'] tracking-[2px] font-bold text-[9px] h-[50px] md:h-full uppercase`}
          >
            <div
              onClick={() => setPlanetContentActive("overview")}
              className={`${
                planetContentActive === "overview" ? `bg-${color}` : ""
              } cursor-pointer h-full flex justify-start items-center border border-white/20 w-72 gap-3 pl-5 py-2`}
            >
              <p className="opacity-50 font-bold font-[Spartan League]">01</p>
              <h2>overview</h2>
            </div>
            <div
              onClick={() => setPlanetContentActive("structure")}
              className={`${
                planetContentActive === "structure" ? `bg-[#419EBB]` : ""
              } cursor-pointer h-full flex justify-start items-center border border-white/20 w-72 gap-3 pl-5 py-2 `}
            >
              <p className="opacity-50 font-bold font-[Spartan League]">02</p>
              <h2>internal structure</h2>
            </div>

            <div
              onClick={() => setPlanetContentActive("surface")}
              className={` ${
                planetContentActive === "surface" ? `bg-[#419EBB]` : ""
              }  cursor-pointer h-full flex justify-start items-center border border-white/20 w-72 gap-3 pl-5 py-2`}
            >
              <p className="opacity-50 font-bold font-[Spartan League]">03</p>
              <h2>surface geology</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Number info */}
      <div className="mx-6 flex flex-col gap-6 mb-12 md:flex-row">
        <div className="border border-white/20  px-6 pt-2 pb-3 w-full flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px]">
            rotation time
          </h3>
          <p className="font-[Antonio] text-xl">{data.rotation}</p>
        </div>
        <div className="border border-white/20 px-6 pt-2 pb-3 w-full flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px]">
            revolution time
          </h3>
          <p className="font-[Antonio] text-xl">{data.revolution}</p>
        </div>
        <div className="border border-white/20 px-6 pt-2 pb-3 w-full flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px]">
            radius
          </h3>
          <p className="font-[Antonio] text-xl">{data.radius}</p>
        </div>
        <div className="border border-white/20 px-6 pt-2 pb-3 w-full flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px]">
            average temp.
          </h3>
          <p className="font-[Antonio] text-xl tracking-[-0.75px]">
            {data.temperature}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PlanetInfo;
