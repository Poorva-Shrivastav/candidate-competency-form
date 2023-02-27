import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
