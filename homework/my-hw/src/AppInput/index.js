import React from 'react';
function AppInput (props)  {
		const{type, value, onChangeCallBack, ...rest} = props;
		const _onChangeCallBack = (props) =>{
			onChangeCallBack(props);
			console.log(props.target.value)
			
		}
	return (<input 
			type = {type}
			value = {value}
			onChange = {_onChangeCallBack}
			{...rest}
		/>
	)
}
export default AppInput