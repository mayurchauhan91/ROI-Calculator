// react-imports
import React, { useState } from "react";
// components
import Investmnet from "./Investment";
import BarChart from "./BarChart";
// css
import "../App.css";

const Home = () => {
  // states
  const [calculateAgeValue, setCalculateAgeValue] = useState("");
  const [calculateBalanceValue, setCalculateBalanceValue] = useState("");

  // methods
  const submitAgeValue = (data) => {
    setCalculateAgeValue(data);
  };
  const submitBalanceValue = (data) => {
    setCalculateBalanceValue(data);
  };

  return (
    <div className="App">
      <div>
        <h1 className="header">ROI Calculator</h1>
      </div>
      <div className="detail-container">
        <div className="main-container">
          <Investmnet
            submitAgeValue={submitAgeValue}
            submitBalanceValue={submitBalanceValue}
          />
          <div className="chart-container">
            <BarChart
              ageData={calculateAgeValue}
              balanceValue={calculateBalanceValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
