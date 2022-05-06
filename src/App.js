import "./App.css";
import Input from "./Components/Input";
import Result from "./Components/Result";

function App() {
  const sum = 1 + 1;
  return (
    <div className="App">
      <h1 className="header">ROI Calulator</h1>
      <div className="main-container">
        <Input />
        <Result sum={sum} />
      </div>
    </div>
  );
}

export default App;
