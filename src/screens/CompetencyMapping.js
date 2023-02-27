import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/Banner";
import SelectPercent from "../components/SelectPercent";

function CompetencyMapping({ competencySelected, competencyPercentHandler }) {
  const [selectedPercent, setSelectedPercent] = useState({});
  const history = useHistory();

  function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  const onSubmit = () => {
    const count = Object.values(selectedPercent).reduce(sumReducer);
    if (count === 100) {
      competencyPercentHandler(selectedPercent);
      history.push("/competencies-details");
    } else {
      alert("Selected percentages should add to 100");
    }
  };

  return (
    <div className="isolate bg-white">
      <Banner />
      <div className="text-center">
        <h1 className="mt-40 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Select a percentage against every chosen competency
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 w-4/5 text-center ml-28">
          It can range between 10%-60% and should sum to 100
        </p>
      </div>
      <div className="w-5/12 mt-4 flex flex-col bg-fuchsia-200 rounded-lg mb:w-full ml-96">
        <div className="flex justify-left max-w-full ml-10">
          <div className="m-4 xl:w-96">
            <SelectPercent
              competencySelected={competencySelected}
              setSelectedPercent={setSelectedPercent}
              selectedPercent={selectedPercent}
            />
          </div>
        </div>
      </div>
      <div className="text-center -mx-3 mb-6">
        <div className="w-full px-3 mt-6">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={onSubmit}
          >
            Next..
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompetencyMapping;
