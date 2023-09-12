import logo from "./logo.svg";
import "./App.css";
import Calender from "./components/Calendar.js";
import Work from "./components/Work.js";

function App() {
  return (
    <div className="App">
      <Calender />
      <Work />
    </div>
  );
}

export default App;
