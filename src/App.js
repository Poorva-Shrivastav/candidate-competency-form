import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./screens/Home";
import Competencies from "./screens/Competencies";
import { useState } from "react";
import CompetenciesExplained from "./screens/CompetenciesExplained";
import CompetencyMapping from "./screens/CompetencyMapping";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [competencySelected, setCompetencySelected] = useState([]);
  const [competencyDataFilled, setCompetencyDataFilled] = useState([]);
  const [competencyPercents, setCompetencyPercents] = useState([]);

  const history = useHistory();

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
    first: userInfo[0],
    last: userInfo[1],
    email: userInfo[2],
    phone: userInfo[3],
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
        // history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <Switch>
        {/* <div className="App"> */}
        <Route exact path="/">
          <Home submitHandler={submitHandler} />
        </Route>
        <Route exact path="/competencies">
          <Competencies competencySelecthandler={competencySelecthandler} />
        </Route>
        <Route exact path="/competencies-details">
          <CompetenciesExplained
            competencySelected={competencySelected}
            competencyDataFilledHandler={competencyDataFilledHandler}
            finalSubmitHandler={finalSubmitHandler}
          />
        </Route>
        <Route exact path="/mapping">
          <CompetencyMapping
            competencySelected={competencySelected}
            competencyPercentHandler={competencyPercentHandler}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
