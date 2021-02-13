import React from "react";
import "./WeatherResult.css";
import { Grid, Typography } from "@material-ui/core";
import hot from "./images/hot.png";
import map_pointer from "./images/map-pointer.png";

const WeatherResult = ({ data }) => {
  if (data?.temp) {
    return (
        <Grid container justify='center' alignItems='center' id='result-container'>
          <Grid item xs={12}>
            <Typography id='temperature'>
              Current Temperature: {data.temp}&#176;C
              <img src={hot} width='30px' height='30px' alt='temperature' />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              src={data.iconurl}
              alt='weather_icon'
              width='120px'
              height='120px'
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id='description'>{data.description}</Typography>
            <Typography id='location'>
              <img
                src={map_pointer}
                width='30px'
                height='30px'
                alt='map_pointer'
              />
              {data.location}{" "}
            </Typography>
          </Grid>
        </Grid>
    );
  }
  if (data?.message) {
    return (
      <div id='result-container'>
        <p id='message'>{data.message}</p>
      </div>
    );
  }
  return null;
};

export default WeatherResult;
