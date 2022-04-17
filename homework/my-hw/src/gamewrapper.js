import React,{ useEffect } from "react";
const HideMe = ({text,isShown}) =>{
	useEffect(() => {
		if(isShown) {
			alert('show')
		} else{ 
			alert('hide')
		}
},[isShown])
	return(
		<h3>{text}</h3>
	)
}
	


export default HideMe
