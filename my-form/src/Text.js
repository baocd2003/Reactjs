import React,{useState} from 'react'
import {ErrorMessage,useField,Field} from 'formik'
 const Text = ({label,...props}) => {
 const [title,setTitle] = useField(props);
 console.log(title);		
  return (
	<div className = "mb-2">
	<label className="mt-3">{label}</label>
	<Field 
	className={`form-control shadow-none ${setTitle.touched && setTitle.error && 'is-invalid'}`}
	autoComplete="off"
	name = {title.name}
	
	/>
	<ErrorMessage component="div" name = {title.name} className="error mb-6"/>
	</div>
  )
}

export default Text
