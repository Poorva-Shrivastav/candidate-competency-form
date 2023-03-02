import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/Banner";
import TextArea from "./TextArea";

function CompetenciesExplained({
  competencySelected,
  competencyDataFilledHandler,
  finalSubmitHandler,
}) {
  const [competencyFilled, setCompetencyFilled] = useState({});

  const history = useHistory();

  const onSubmit = () => {
    if (
      Object.values(competencyFilled).filter((item) => item !== "").length === 4
    ) {
      competencyDataFilledHandler(competencyFilled);
      finalSubmitHandler();
    } else {
      alert("Please fill all the blocks");
    }
  };

  return (
    <div className="isolate bg-white">
      <Banner />
      <div className="text-center">
        <h2 className="mt-40 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let's take next step towards explainng these competencies:
        </h2>
      </div>
      <div className=" w-9/12 ml-48 mt-4 p-2 flex flex-col rounded-lg bg-fuchsia-200">
        <TextArea
          competencySelected={competencySelected}
          competencyFilled={competencyFilled}
          setCompetencyFilled={setCompetencyFilled}
        />
      </div>
      <div className="text-center -mx-3 mb-6">
        <div className="w-full px-3 mt-6">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompetenciesExplained;
