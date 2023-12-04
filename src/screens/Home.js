import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/Banner";

const initialvalues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function Home(props) {
  const [formVal, setFormVal] = useState(initialvalues);

  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "phone" && !isNaN(e.target.value)) {
      setFormVal({ ...formVal, [e.target.name]: e.target.value });
    } else if (e.target.name !== "phone") {
      setFormVal({ ...formVal, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      formVal.firstName !== "" &&
      formVal.lastName !== "" &&
      formVal.email !== "" &&
      formVal.phone !== ""
    ) {
      props.submitHandler(formVal);

      const data = {
        first: formVal.firstName,
        last: formVal.lastName,
        email: formVal.email,
        phone: formVal.phone,
      };

      const URL = process.env.REACT_APP_API_SCRIPT;

      fetch(URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("userInfo", JSON.stringify(formVal.email));
        })
        .then((push) => history.push("/competencies"))
        .catch((err) => console.log(err));
    } else {
      alert("Please fill all the values in the form");
    }
  };

  return (
    <div className="isolate bg-white flex justify-center md: ml-3">
      <Banner />
      <div className="mt-20">
        <h1 className="text-center mb-10 text-lg font-bold tracking-tight text-gray-900 sm:text-4xl">
          Competency Assessment Form
        </h1>
        <form className="w-full max-w-lg" onSubmit={onSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:px-3 mb-6 md:mb-0 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 float-left">
                First Name*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="firstName"
                placeholder="Jane"
                onChange={handleChange}
                value={formVal.firstName}
                size="20"
              />
            </div>
            <div className="w-full md: px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 float-left">
                Last Name*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                name="lastName"
                onChange={handleChange}
                value={formVal.lastName}
                size="30"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 float-left">
                Email*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formVal.email}
                size="30"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 float-left">
                Phone*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="Tel"
                placeholder="Mobile No"
                name="phone"
                onChange={handleChange}
                value={formVal.phone}
                minlength="10"
                maxlength="10"
                size="10"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 text-center">
              <button
                type="submit"
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Next..
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
