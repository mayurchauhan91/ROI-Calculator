import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Slider } from "@mui/material";
import { useState } from "react";
const currencies = [
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
];

const Input = () => {
  const [currency, setCurrency] = useState("£");
  const [startAmount, setStartAmount] = useState();
  const [monthlyInvest, setMonthlyInvest] = useState();
  const [ageValue, setAgeValue] = useState(25);
  const handleStartAmountChange = (e) => {
    setStartAmount(e.target.value);
  };
  const handleInvestAmountChange = (e) => {
    setMonthlyInvest(e.target.value);
  };
  console.log(monthlyInvest);
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleAgeValueChange = (e) => {
    console.log(ageValue);
    setAgeValue(e.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "200px" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form-container">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "12ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="form-container">
            <TextField
              required
              id="outlined-select-currency"
              select
              label="Currency"
              value={currency}
              onChange={handleCurrencyChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <span className="sublabel-desc">Please select your currency</span>
          </div>
        </Box>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Initial Deposit"
          placeholder={currency + " " + "10000.00"}
          defaultValue=""
          value={startAmount}
          handleChange={handleStartAmountChange}
        />
        <span className="sublabel-desc">
          How much your investments begins with?
        </span>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Monthly Investment"
          placeholder={currency + " " + "500.00"}
          defaultValue=""
          value={monthlyInvest}
          handleChange={handleInvestAmountChange}
        />
        <br />
        <Box sx={{ marginLeft: 0.7, width: 195 }}>
          <span className="sublabel-desc">Time Period</span>
          <Slider
            // getAriaLabel={() => "Temperature range"}
            value={ageValue}
            onChange={handleAgeValueChange}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </Box>
  );
};

export default Input;
