import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Result from "./Components/BarChart";
import { BarChart } from "@mui/icons-material";

function App() {
  const [currency, setCurrency] = useState("£");
  const [startAmount, setStartAmount] = useState();
  const [monthlyInvest, setMonthlyInvest] = useState();
  const [ageValue, setAgeValue] = useState(25);
  const [rate, setRate] = useState();
  const [result, setResult] = useState();

  const interest = rate / 100;
  console.log(interest);

  const totalMonthlyInvestment = Math.floor(monthlyInvest * 12);

  const calculateAmount =
    parseInt(startAmount) + parseInt(totalMonthlyInvestment);
  console.log(ageValue);

  console.log(calculateAmount);

  const calculate = () => {
    const result = [];
    let currentBalance = startAmount;
    const startAge = 0;
    while (startAge <= ageValue) {
      for (let i = 0; i < 12; i++) {
        currentBalance =
          Math.round(currentBalance * interest) + totalMonthlyInvestment;
      }
      result.push({
        startAge,
        balance: currentBalance,
      });
      startAge++;
    }
    return result;
    // const result = calculateAmount * Math.pow(1 + interest, ageValue);
    // setResult(result.toFixed(2));
  };

  const results = calculateAmount * Math.pow(1 + interest, ageValue);
  console.log(results.toFixed(2));

  console.log(totalMonthlyInvestment);

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

  const handleSubmit = (e) => {
    calculate();
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1 className="header">ROI</h1>
      <div className="main-container">
        <Input
          registration={{
            required: "Required",
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
          OnSubmit={handleSubmit}
        />
        <BarChart />
        <span>
          {results.toFixed(2)} {currency}
        </span>
      </div>
    </div>
  );
}

export default App;
