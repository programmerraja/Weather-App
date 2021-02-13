import React from "react";
import { Grid } from "@material-ui/core";
import UserInput from "./components/UserInput";
import WeatherResult from "./components/WeatherResult";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    //settng the state
    this.state = {
      location: "",
      temp: "",
      iconurl: "",
      description: "",
      message: "",
    };
    //binding method to this
    this.getInput = this.getInput.bind(this);
    this.getWeather = this.getWeather.bind(this);
    //calling the method to get the lat and log by using ip adress
    this.getInput(0, 1);
  }

  async getWeather(event, lat, lon) {
    let location = this.state.location;
    var link;
    if (location) {
      link =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&units=metric&appid=0ebf0e29926cc939f557a936228e1129";
    } else if (lat && lon) {
      link =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=metric&appid=0ebf0e29926cc939f557a936228e1129";
    }
    let response = await fetch(link);
    let data = await response.json();
    if (data["cod"] === "404" || data["cod"] === "400") {
      this.setState({ message: data["message"] });
    } else if (data) {
      let description = data["weather"][0]["description"];
      let location = data["name"];
      let iconcode = data["weather"][0]["icon"];
      let temp = Math.floor(data["main"]["temp"]);

      let iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
      //setting hte state
      this.setState({
        temp: temp,
        iconurl: iconurl,
        description: description,
        location: location,
      });
    }
  }

  async getInput(event, isip) {
    if (event) {
      let location = event.target.value;
      if (location) {
        this.setState({
          location: location,
          temp: "",
          iconurl: "",
          description: "",
          message: "",
        });
      }
    }
    if (isip) {
      //geting the user lat and lon using ip
      const link = "https://ipapi.co/json";
      let response = await fetch(link);
      let data = await response.json();
      if (data) {
        let lat = data.latitude;
        let lon = data.longitude;
        this.getWeather(0, lat, lon);
      }
    }
  }
  render() {
    return (
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={10} id='container' >
          <UserInput getInput={this.getInput} getWeather={this.getWeather} />
        </Grid>
        <Grid item xs={10} >
           <WeatherResult data={this.state} />
        </Grid>
      </Grid>
    );
  }
}
export default App;
