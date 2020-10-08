import React  from 'react';
import "./Header.css";
import sun from "./images/sun.png";

class Header extends React.Component{
 render()
 {
 	return(

 			<div id="header">
 			<img src={sun} height="40px" width="40px" alt="logo"/>
			<p> Weather App</p>
 			</div>
 		)
 }

}

export default Header;
