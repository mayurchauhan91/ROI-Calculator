import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Input = () => {
  const [startAmount, setStartAmount] = useState();
  const handleChange = (e) => {
    startAmount(e.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "300px" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form-container">
        <label className="label-desc">Starting Balance</label>
        <span className="sublabel-desc">
          How much your investments begins with?
        </span>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Starting Balance"
          placeholder="eg. 10000"
          defaultValue=""
          value={startAmount}
          handleChange={handleChange}
        />
      </div>
    </Box>
  );
};

export default Input;
