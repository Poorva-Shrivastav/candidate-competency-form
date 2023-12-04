import React, { useEffect } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Banner from "../components/Banner";

function Confirmation({ setIsFormSubmitted }) {
  useEffect(() => {
    localStorage.clear();
  }, []);

  const clickHandler = () => {
    setIsFormSubmitted(false);
    <Redirect to="/" />;
  };
  return (
    <div className="text-center">
      <div className="text-center">
        <h1 className="mt-40 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Thank you for submitting your form!
        </h1>
        <p className="mt-6 text-lg leading-8 text-pink-600 w-4/5 text-center ml-28">
          HR team would get back to you incase of any query
        </p>

        <button
          className="mt-6 text-lg leading-8 text-gray-400 w-1/5 text-center"
          onClick={clickHandler}
        >
          Go Back to Home Page
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
