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
					 				<span id="temperature">
					 					{this.props.data.temp} C &#176;
					 					<img src={hot} width="50px" height="50px" alt="temperature"/>
					 				</span>
					 				<br/>
					 				
					 				<img src={this.props.data.iconurl} alt="icon" width="100px" height="100px" alt="weather_icon"/>
					 				<p id="description">{this.props.data.description}</p>

					 				<p id="location">
					 					<img src={map_pointer} width="30px" height="30px" alt="map_pointer"/>
					 					{this.props.data.location}
					 				</p>
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
