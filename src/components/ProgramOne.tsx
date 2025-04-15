"use client";

import React, { useState } from "react";

const ProgramOne = () => {
  const [angleOne, setAngleOne] = useState("");
  const [angleTwo, setAngleTwo] = useState("");
  const [angleThree, setAngleThree] = useState("");
  const [result, setResult] = useState("");

  const checkTriangle = () => {
    const aOne = parseFloat(angleOne);
    const aTwo = parseFloat(angleTwo);
    const aThree = parseFloat(angleThree);

    if (isNaN(aOne) || isNaN(aTwo) || isNaN(aThree)) {
      setResult("Please enter valid numbers for all angles.");
      return;
    }

    if (aOne <= 0 || aTwo <= 0 || aThree <= 0) {
      setResult("All angles must be greater than 0.");
      return;
    }

    const sum = aOne + aTwo + aThree;
    if (sum === 180) {
      setResult("This is a valid triangle");
    } else {
      setResult("This is not a valid triangle");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="md:max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
           Triangle checker
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Angle 1</label>
          <input
            type="number"
            value={angleOne}
            onChange={(e) => setAngleOne(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter first angle"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Angle 2</label>
          <input
            type="number"
            value={angleTwo}
            onChange={(e) => setAngleTwo(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter second angle"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Angle 3</label>
          <input
            type="number"
            value={angleThree}
            onChange={(e) => setAngleThree(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter third angle"
          />
        </div>

        <button
          onClick={checkTriangle}
          className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Check Triangle
        </button>

        {result && (
          <div className="mt-4 text-center font-semibold text-lg text-red-500">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramOne;
