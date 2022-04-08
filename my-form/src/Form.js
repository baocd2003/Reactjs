import React, { useState } from 'react';
import {Formik,Field} from "formik"
import Text from "./Text"
import * as Yup from "yup"
function Form(){
	const validate = Yup.object({
		fullName : Yup.string().required('Bắt buộc nhập họ tên'),

		cmnd : Yup.number().typeError('Phải là số')
		.min(100000000,'tu 9-12 so').
		max(100000000000,'tu 9-12 so').
		required('Bắt buộc nhập cmnd'),

		year : Yup.number().
		min(0,'Vô lý').
		max(2022,'chưa đẻ ra nữa đòi khai y tế').
		required('Bắt buộc nhập năm sinh'),

		workPlace : Yup.string(),

		posPlace : Yup.string(),

		city: Yup.string().required('Bắt buộc nhập tỉnh thành'),

		district: Yup.string().required('Bắt buộc nhập quận/huyện'),

		ward: Yup.string().required('Bắt buộc nhập phường/xã'),

		address:Yup.string().required('Cần nhập số nhà'),

		phoneNumber:Yup.number().
		typeError('Phải là số').
		max(99999999999,'Số điện thoại 11 số').
		required('Bắt buộc nhập số điện thoại'),

		email:Yup.string().
		email('Mail k phù hợp! Vd:BaoCao494@gmail.com').
		required('Bắt buộc nhập email'),



	})
	const [country,setCountry] = useState('Việt Nam')

	const handleChange = (evt) => {
		setCountry(evt.target.value)
	}
	// console.log(country);
	return(
		<Formik
			initialValues = {{
				fullName : '',
				cmnd:'',
				year:'',
				countries:country,
				workPlace : '',
				posPlace : '',
				haveInsurance:false,
				city:'',
				district:'',
				ward:'',
				address:'',
				email:'',
				place:'',
			}}
			validationSchema = {validate}
			onSubmit={values => {
				console.log(values)
			  }}
		>
			
			{formik => (
			<div>
				<h1>Khai báo y tế</h1>
				{/* {console.log(formik)} */}
				<Text label = 'Họ và tên ' name='fullName'/>
				<Text label='Số cmnd' name='cmnd'/>
				<Text label = 'Năm sinh' name = 'year'/>
				<label className='mt-4'>Quốc Tịch</label>
				<Field name = "country" as = "select" onChange = {handleChange}>
					<option>Việt Nam</option>
					<option>Nhật Bản</option>
					<option>Lào</option>
					<option>Trung Quốc</option>
				</Field>
				<Text label = 'Nơi làm việc' name = 'workPlace'/>
				<Text label = 'Bộ phận làm việc' name = 'posPlace'/>
				<div className="mb-4">
				<label className="mx-4">Có thẻ bảo hiểm y tế</label>
				<input
					type="checkbox"
					name="haveInsurance"
					checked={formik.values.haveInsurance}
					onChange={formik.handleChange}
					
				/>
				</div>
				<h1>Địa chỉ liên lạc tại Việt Nam</h1>
				<Text label = 'Tỉnh thành' name = 'city'/>
				<Text label = 'Quận/Huyện' name = 'district'/>
				<Text label ='Phường/Xã' name = 'ward'/>
				<Text label ='Số nhà/phố/tổ dân phó/tổ đội' name = 'address'/>
				<Text label ='Số điện thoại' name = 'phoneNumber'/>
				<Text label= 'Email' name = 'email'/>
				
				<h4 className>Trong vòng 14 ngày qua, Anh/Chị đến quốc gia/ vùng lãnh thổ nào (Có
           		 thể đi qua nhiều quốc gia) </h4>
				<textarea name = 'place' onChange = {formik.handleChange} className='w-100 h-100'/>
				<button className="btn btn-dark mt-3" type="submit" onClick={formik.handleSubmit}>Gửi</button>
			</div>
			)}
			
		</Formik>
	)
}

export default Form;