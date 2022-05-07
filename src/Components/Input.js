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
  const [rate, setRate] = useState();
  const handleStartAmountChange = (e) => {
    setStartAmount(e.target.value);
  };
  const handleInvestAmountChange = (e) => {
    setMonthlyInvest(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleAgeValueChange = (e) => {
    setAgeValue(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
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
            <span className="sublabel-desc">Please select your currency</span>
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
          </div>
        </Box>
        <br />
        <span className="sublabel-desc">
          How much your investments begins with?
        </span>
        <TextField
          required
          id="outlined-required"
          label="Initial Deposit"
          placeholder={currency + " " + "10000.00"}
          defaultValue=""
          value={startAmount}
          handleChange={handleStartAmountChange}
        />
        <br />
        <span className="sublabel-desc">
          How much would you like to contribute each month?
        </span>
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
          <span>{ageValue} Years</span>
        </Box>
        <br />
        <span className="sublabel-desc">Estimate Rate of Return %</span>
        <Box>
          <TextField
            required
            id="outlined-required"
            label="Estimate Rate"
            placeholder={"5.00 %"}
            value={rate}
            defaultValue=""
            onChange={handleRateChange}
          ></TextField>
        </Box>
      </div>
    </Box>
  );
};

export default Input;
