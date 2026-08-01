import "./App.css";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import Disclosure from "./components/Disclosure";

function App() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Accessibility Playground</h1>

      <Modal />

      <Tabs />

      <Disclosure />
    </div>
  );
}

export default App;