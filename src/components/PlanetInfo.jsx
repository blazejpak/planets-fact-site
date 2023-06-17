import React from "react";

const PlanetInfo = ({ data }) => {
  return (
    <div>
      <h1 className="text-xl text-pink-700 font-bold">h1</h1>
      <h1 className="text-xl text-pink-700 font-bold">h1</h1>
      <h1 className="text-xl text-pink-700 font-bold">h1</h1>
      <h1 className="text-xl text-pink-700 font-bold">h1</h1>
      <h1 className="text-xl text-pink-700 font-bold">h1</h1>
      <h1 className="text-xl text-pink-700 font-bold">h1</h1>
      <h1 className="text-xl text-pink-700 font-bold">h1</h1>
      <div>{data.name}</div>
    </div>
  );
};

export default PlanetInfo;
