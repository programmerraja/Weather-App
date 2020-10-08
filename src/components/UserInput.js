import React from "react";
import "./UserInput.css";
import { TextField, Button } from "@material-ui/core";

const UserInput = ({ getInput, getWeather }) => (
  <div id='search'>
    <TextField fullWidth label='Enter City, Country' onChange={getInput} />
    <Button
      id='get-weather-button'
      variant='contained'
      color='secondary'
      onClick={getWeather}
    >
      Get Weather
    </Button>
  </div>
);

export default UserInput;
