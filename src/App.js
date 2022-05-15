// react-imports
import React, { useState } from "react";
import "./App.css";

// components
import Investment from "./Components/Investment";
import BarChart from "./Components/BarChart";

function App() {
  // states
  const [currency, setCurrency] = useState("£");
  const [startAmount, setStartAmount] = useState("");
  const [monthlyInvest, setMonthlyInvest] = useState("");
  const [ageValue, setAgeValue] = useState(1);
  const [rate, setRate] = useState("");
  const [calculateAgeValue, setCalculateAgeValue] = useState("");
  const [calculateBalanceValue, setCalculateBalanceValue] = useState("");

  // methods
  const calculation = () => {
    // consts
    const startAge = 1;
    const finalResult = [];
    let age = startAge;
    let currentBalance = startAmount;
    const monthlyRate = Math.pow(1 + rate / 100, 1 / 12);

    while (age <= ageValue) {
      for (let i = 0; i < 12; i++) {
        currentBalance =
          Math.round(currentBalance * monthlyRate) + parseInt(monthlyInvest);
      }
      finalResult.push({
        age,
        balance: currentBalance,
      });
      age++;
    }
    return finalResult;
  };

  const calculateBalance = (value) => {
    return calculation(value).map((balanceData) => {
      return balanceData.balance;
    });
  };

  const calculateAge = (value) => {
    return calculation(value).map((yearData) => {
      return yearData.age;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCalculateBalanceValue(calculateBalance());
    setCalculateAgeValue(calculateAge());
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
      <h1 className="header">ROI Calculator Test</h1>
      <div className="main-container">
        <Investment
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
        <div className="chart-container">
          <BarChart
            ageValue={ageValue}
            currency={currency}
            ageData={calculateAgeValue}
            balanceValue={calculateBalanceValue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
