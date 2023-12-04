import React from "react";
import Banner from "../components/Banner";
import FinalTable from "../components/FinalTable";
import Confirmation from "./Confirmation";

function FinalForm({
  finalSubmitHandler,
  data,
  setIsFormSubmitted,
  isFormSubmitted,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    finalSubmitHandler();
  };
  return (
    <div className="isolate bg-white">
      <Banner />
      {isFormSubmitted ? (
        <Confirmation setIsFormSubmitted={setIsFormSubmitted} />
      ) : (
        <>
          <div className="text-center">
            <h5 className="mt-20 mb-10 text-5xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Let's submit!
            </h5>
          </div>
          <div className="max-h-screen w-10/12 ml-20 mt-4 bg-from-fuchsia-200">
            {data && <FinalTable data={data} />}
          </div>
          <div className="text-center -mx-3 mb-6">
            <div className="w-full px-3 mt-6">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 
                px-10 rounded"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FinalForm;
