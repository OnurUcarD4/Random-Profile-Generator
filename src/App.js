import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Views from "./views";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Views} />
      </Switch>
    </Router>
  );
};

export default App;
