import "./App.css";
import Props from "./assets/components/Props";

function App() {
  return (
    <div className="main-box">
      <h1>Student Results</h1>
      <div className="container">
        <Props name="Astha Gupta" course="Computer Science" marks="95" />
        <Props name="Ruchi" course="Computer Science" marks="92" />
        <Props name="Sonakshi" course="Computer Science" marks="98" />
      </div>
    </div>
  );
}

export default App;
