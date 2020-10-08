import React  from 'react';
import "./WeatherResult.css";
import hot from './images/hot.png';
import map_pointer from './images/map-pointer.png';

class WeatherResult extends React.Component{
	  render()
		 {
		  if(this.props.data)
		  {
					 	if(this.props.data.temp )
					 	{
					 		return(
					 				<div>
									<div style={{
										display: "flex",
										alignItems: "center",
									}}>
					 					<img src={map_pointer} style={{ marginRight: "1rem" }} width="30px" height="30px" alt="map_pointer"/>
										<p id="location">{this.props.data.location}</p>
									</div>
					 				

					 				<span id="temperature">
					 					<img src={hot} style={{ marginRight: "1rem" }} width="50px" height="50px" alt="temperature"/>
					 					{this.props.data.temp} &#176;C 
					 				</span>
					 				<br/>
					 				
									<div style={{
										display: "flex",
										alignItems: "center",
									}}>
										<img src={this.props.data.iconurl} alt="icon" width="100px" height="100px" alt="weather_icon"/>
					 					<p id="description">{this.props.data.description}</p>
									</div>
					 				</div>  			
					 	  	    )
					 	}
					 	else if(this.props.data.message)
					 	{
					 		return(
					 				<div>
					 				<p id="message">{this.props.data.message}</p>
					 				</div> 
					 			)
					 	}
		 }
		 return(null)
		 }

}

export default WeatherResult;
