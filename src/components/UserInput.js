import React  from 'react';
import "./UserInput.css";


class UserInput extends React.Component{
 render()
 {
 	return(

 			<div id="search">
 			<input type="text"  placeholder="Enter City, Country" onChange={this.props.getInput}/>
 			<input type="button" value="Get Weather"  onClick={this.props.getWeather}/>
 			</div>
 		)
 }

}

export default UserInput;
