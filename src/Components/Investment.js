// react-imports
import React, { useState } from "react";
// material ui imports
import {
  Slider,
  TextField,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";
// components imports
import Currencies from "./Currencies";

const Investment = ({ submitAgeValue, submitBalanceValue }) => {
  const [currency, setCurrency] = useState("£");
  const [startAmount, setStartAmount] = useState("");
  const [monthlyInvest, setMonthlyInvest] = useState("");
  const [ageValue, setAgeValue] = useState(0);
  const [rate, setRate] = useState("");

  // methods
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
    submitAgeValue(calculateAge());
    submitBalanceValue(calculateBalance());
  };

  return (
    <div>
      <FormControl
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "200px" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="form-container">
          <label className="sublabel-desc">Please select your currency</label>
          <TextField
            required
            id="outlined-select-currency"
            select
            label="Currency"
            value={currency}
            onChange={handleCurrencyChange}
          >
            {Currencies.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <label className="sublabel-desc">
            How much your investments begins with?
          </label>
          <TextField
            required
            type="number"
            id="outlined"
            label="Initial Deposit"
            placeholder={currency + "10000.00"}
            defaultValue=""
            value={startAmount}
            onChange={handleStartAmountChange}
          />
          <br />
          <label className="sublabel-desc">
            How much would you like to contribute each month?
          </label>
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Monthly Deposit"
            placeholder={currency + "500.00"}
            defaultValue=""
            value={monthlyInvest}
            onChange={handleInvestAmountChange}
          />
          <br />
          <label className="sublabel-desc">Time Period</label>
          <Slider
            required
            value={ageValue || ""}
            onChange={handleAgeValueChange}
            valueLabelDisplay="auto"
            style={{ width: 195 }}
          />
          <span>{ageValue} Years</span>
          <br />
          <label className="sublabel-desc">Estimate Rate of Return %</label>
          <TextField
            required
            noValidate
            type="number"
            id="outlined-required"
            label="Estimate Rate"
            placeholder={"5.00 %"}
            value={rate}
            defaultValue=""
            onChange={handleRateChange}
          />
          <br />
          <br />
          <div className="button">
            <Button
              style={{ width: 150 }}
              variant="contained"
              type="submit"
              size="medium"
            >
              Submit
            </Button>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default Investment;
