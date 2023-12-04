import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Competencies from "./screens/Competencies";
import { useState } from "react";
import CompetenciesExplained from "./screens/CompetenciesExplained";
import CompetencyMapping from "./screens/CompetencyMapping";
import FinalForm from "./screens/FinalForm";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import Confirmation from "./screens/Confirmation";
import { useEffect } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [competencySelected, setCompetencySelected] = useState([]);
  const [competencyDataFilled, setCompetencyDataFilled] = useState([]);
  const [competencyPercents, setCompetencyPercents] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const localStorageVal = localStorage.getItem("userInfo");

  useEffect(() => {
    console.log("localStorage.clear called");
    localStorage.clear();
  }, []);

  const submitHandler = (user) => {
    setUserInfo(user);
  };

  const competencySelecthandler = (competency) => {
    setCompetencySelected(competency);
  };

  const competencyDataFilledHandler = (data) => {
    setCompetencyDataFilled(data);
  };

  const competencyPercentHandler = (percent) => {
    setCompetencyPercents(percent);
  };

  const data = {
    first: userInfo.firstName,
    last: userInfo.lastName,
    email: userInfo.email,
    phone: userInfo.phone,
    competency1: competencySelected[0],
    competency2: competencySelected[1],
    competency3: competencySelected[2],
    competency4: competencySelected[3],
    competencyWeightage1: Object.values(competencyPercents)[0],
    competencyWeightage2: Object.values(competencyPercents)[1],
    competencyWeightage3: Object.values(competencyPercents)[2],
    competencyWeightage4: Object.values(competencyPercents)[3],
    competencyData1: Object.values(competencyDataFilled)[0],
    competencyData2: Object.values(competencyDataFilled)[1],
    competencyData3: Object.values(competencyDataFilled)[2],
    competencyData4: Object.values(competencyDataFilled)[3],
  };

  const URL = process.env.REACT_APP_DATA_API_SCRIPT;
  const finalSubmitHandler = () => {
    if (
      Object.keys(userInfo).length > 0 &&
      competencySelected.length > 0 &&
      Object.keys(competencyDataFilled).length > 0 > 0 &&
      Object.keys(competencyPercents).length > 0
    ) {
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
          console.log("data from app ", data);
          setUserInfo({});
          setCompetencySelected([]);
          setCompetencyDataFilled({});
          setCompetencyPercents({});
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    } else {
      alert(
        "Looks like you haven't filled all the required details. Please try agian!"
      );
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home submitHandler={submitHandler} />
        </Route>

        <Route path="/competencies">
          <Competencies competencySelecthandler={competencySelecthandler} />
        </Route>
        <Route path="/competencies-details">
          {localStorageVal ? (
            <CompetenciesExplained
              competencySelected={competencySelected}
              competencyDataFilledHandler={competencyDataFilledHandler}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/mapping">
          {localStorageVal ? (
            <CompetencyMapping
              competencySelected={competencySelected}
              competencyPercentHandler={competencyPercentHandler}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/submit">
          {localStorageVal ? (
            <FinalForm
              finalSubmitHandler={finalSubmitHandler}
              data={data}
              setIsFormSubmitted={setIsFormSubmitted}
              isFormSubmitted={isFormSubmitted}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
