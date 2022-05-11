import React, { useState } from "react";
import "./App.css";
import InputComponent from "./Components/Input";
import BarChart from "./Components/BarChart";

function App() {
  const [currency, setCurrency] = useState("£");
  const [startAmount, setStartAmount] = useState("");
  const [monthlyInvest, setMonthlyInvest] = useState("");
  const [ageValue, setAgeValue] = useState(2);
  const [rate, setRate] = useState("");
  const [result, setResult] = useState("");

  const interest = rate / 100;
  const totalMonthlyInvestment = Math.floor(monthlyInvest * 12);
  const calculateAmount =
    parseInt(startAmount) + parseInt(totalMonthlyInvestment);
  const results = calculateAmount * Math.pow(1 + interest, ageValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(results.toFixed(2));
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const handleStartAmountChange = (e) => {
    setStartAmount(e.target.value);
  };
  const handleInvestAmountChange = (e) => {
    setMonthlyInvest(e.target.value);
  };
  const handleAgeValueChange = (e) => {
    setAgeValue(e.target.value);
  };
  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="header">ROI</h1>
      <div className="main-container">
        <InputComponent
          registration={{
            required: "required",
            min: 0,
          }}
          currency={currency}
          startAmount={startAmount}
          monthlyInvest={monthlyInvest}
          ageValue={ageValue}
          rate={rate}
          currencyChange={handleCurrencyChange}
          startAmountChange={handleStartAmountChange}
          investAmountChange={handleInvestAmountChange}
          ageValueChange={handleAgeValueChange}
          rateChange={handleRateChange}
          handleSubmit={handleSubmit}
        />
        <div>
          <BarChart ageValue={ageValue} results={result} currency={currency} />
        </div>
      </div>
    </div>
  );
}

export default App;
