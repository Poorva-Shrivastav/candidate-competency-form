import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/Banner";
import { competencies } from "../components/competency";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Competencies(props) {
  const localStorageVal = localStorage.getItem("userInfo");

  const [competencyList, setCompetencyList] = useState([]);
  const history = useHistory();

  const addCompetency = (e) => {
    const val = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCompetencyList([...competencyList, val]);
    } else {
      const idx = competencyList.indexOf(val);
      competencyList.splice(idx, 1);
      setCompetencyList([...competencyList]);
    }
  };

  const onSubmit = () => {
    if (competencyList.length === 4) {
      props.competencySelecthandler(competencyList);
      history.push("/mapping");
    } else {
      alert("Please choose any four competencies");
    }
  };

  return (
    <div className="isolate bg-white">
      <Banner />
      {localStorageVal ? (
        <>
          <div className="text-center">
            <h1 className="mt-40 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Select Competencies that represent you the most
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 w-4/5 text-center ml-28">
              Competency-based hiring is grounded in the identification of core
              competencies required for success and the subsequent evaluation of
              each candidate's demonstration of those competencies in their past
              experiences.
            </p>
            <p className="mt-6 text-m leading-8 text-pink-600 w-4/5 text-center ml-28">
              Please select any four competencies
            </p>
          </div>
          <div className="max-h-screen w-9/12 ml-40 mt-4 bg-gradient-to-r from-fuchsia-200 grid grid-cols-5">
            {competencies.map((competency, id) => (
              <div className="p-6 w-60" key={id}>
                <input
                  key={id}
                  className="mr-2"
                  type="checkbox"
                  value={competency}
                  id="checkbox1"
                  onChange={addCompetency}
                />
                <label className="inline pl-[0.15rem] hover:cursor-pointer">
                  {competency}
                </label>
              </div>
            ))}
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
        </>
      ) : (
        <div className="text-center">
          <h1 className="mt-40 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Looks like we don't know you.
          </h1>
          <p className="mt-6 text-lg leading-8 text-pink-600 w-4/5 text-center ml-28">
            Help us know you first before you proceed.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400 w-4/5 text-center ml-28">
            <Link to="/">Go to Home page</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Competencies;
