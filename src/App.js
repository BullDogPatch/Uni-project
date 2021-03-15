import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import UseCases from "./components/pages/UseCases";
import TechnicalChallenges from "./components/pages/TecnicalChallenges";

import MyShortCv from "./components/pages/MyShortCv";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/useCases" component={UseCases} />
          <Route path="/technical-challenges" component={TechnicalChallenges} />
          <Route path="/shortCv" component={MyShortCv} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
