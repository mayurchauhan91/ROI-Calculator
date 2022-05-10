import React from "react";
import Box from "@mui/material/Box";
import {
  Slider,
  TextField,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";
import currencies from "./currencies";

const Input = ({
  currency,
  startAmount,
  monthlyInvest,
  ageValue,
  rate,
  currencyChange,
  startAmountChange,
  investAmountChange,
  ageValueChange,
  rateChange,
  onSubmit,
}) => {
  return (
    <div>
      <FormControl onSubmit={onSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "200px" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="form-container">
            <div className="form-container">
              <span className="sublabel-desc">Please select your currency</span>
              <TextField
                required
                id="outlined-select-currency"
                select
                label="Currency"
                value={currency}
                onChange={currencyChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <br />
            <span className="sublabel-desc">
              How much your investments begins with?
            </span>
            <TextField
              required
              type="number"
              id="outlined"
              label="Initial Deposit"
              placeholder={currency + " " + "10000.00"}
              defaultValue=""
              value={startAmount}
              onChange={startAmountChange}
            />
            <br />
            <span className="sublabel-desc">
              How much would you like to contribute each month?
            </span>
            <TextField
              required
              type="number"
              id="outlined-required"
              label="Monthly Investment"
              placeholder={currency + " " + "500.00"}
              defaultValue=""
              value={monthlyInvest}
              onChange={investAmountChange}
            />
            <br />
            <div style={{ marginLeft: 0.7, width: 195 }}>
              <span className="sublabel-desc">Time Period</span>
              <Slider
                required
                // getAriaLabel={() => "Temperature range"}
                value={ageValue}
                onChange={ageValueChange}
                valueLabelDisplay="auto"
              />
              <span>{ageValue} Years</span>
            </div>
            <br />
            <span className="sublabel-desc">Estimate Rate of Return %</span>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Estimate Rate"
                placeholder={"5.00 %"}
                value={rate}
                defaultValue=""
                onChange={rateChange}
              />
            </div>
            <br />
            <div>
              <Button
                variant="contained"
                type="buton"
                size="medium"
                onClick={onSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </FormControl>
    </div>
  );
};

export default Input;
