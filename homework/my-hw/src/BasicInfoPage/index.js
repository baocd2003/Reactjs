import React,{useState} from 'react';
import AppInput from '../AppInput'
function BasicInfoPage(){
	const[information,setInformation] = useState({});
	// const[fillTriggers,setFillTriggers] = useState(true);
	const editValue = (event,fieldName) => {
		let _info = {...information};
		_info[fieldName] = event.target.value;
		setInformation(_info);
	}
	// const onTriggerFill = (trig) => {
	// 	setFillTriggers(!trig)
	// }
	return(
		<div>
			<AppInput type="text" value = {information.fullName} onChangeCallBack = {(props) => editValue(props,'fullName')}/>
			<AppInput type="number" value = {information.age} onChangeCallBack = {(props) =>  editValue(props,'age')}/>
			<AppInput type="text" value = {information.email} onChangeCallBack = {(props) => editValue(props,'email')}/>
			<AppInput type="text" value = {information.address} onChangeCallBack = {(props) => editValue(props,'address')}/>
		</div>
	)
}
export default BasicInfoPage