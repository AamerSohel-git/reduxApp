import "./App.css";
import RoutingComp from "./Components/Route/RoutingComp";
import { AppLogin } from "./Components/LogedIn/AppLogin";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.tokenReducer.token);
  return <div className="App">{token ? <RoutingComp /> : <AppLogin />}</div>;
}

export default App;
