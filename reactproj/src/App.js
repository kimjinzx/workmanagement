import Calendar from "./components/Calendar.js";
import Work from "./components/Work.js";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { useStore } from "./components/Store";

function App() {
  const { modalIsOpen } = useStore();

  return (
    <div className="App">
      <Calendar />
      <Button />
      <Work />
      {modalIsOpen && <Modal />}
      </div>
  );
}
export default App;