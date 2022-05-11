import React from "react";
import {
  Slider,
  TextField,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";
import currencies from "./currencies";

const InputComponent = ({
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
  handleSubmit,
}) => {
  return (
    <div>
      <FormControl
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "200px" },
        }}
        noValidate
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
            onChange={currencyChange}
          >
            {currencies.map((option) => (
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
            onChange={startAmountChange}
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
            onChange={investAmountChange}
          />
          <br />
          {/* <div style={{ marginLeft: 0.7, width: 195 }}> */}
          <label className="sublabel-desc">Time Period</label>
          <Slider
            required
            value={ageValue || ""}
            onChange={ageValueChange}
            valueLabelDisplay="auto"
            style={{ width: 195 }}
          />
          <span>{ageValue} Years</span>
          <br />
          <label className="sublabel-desc">Estimate Rate of Return %</label>
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Estimate Rate"
            placeholder={"5.00 %"}
            value={rate}
            defaultValue=""
            onChange={rateChange}
          />
          <br />
          <Button
            style={{ width: 150 }}
            variant="contained"
            type="submit"
            size="medium"
          >
            Submit
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default InputComponent;
