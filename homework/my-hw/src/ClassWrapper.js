import { render } from '@testing-library/react'
import React,{ useEffect,useState} from 'react'
import  ReactDOM  from 'react-dom'
// import StudentInfo from './StudentInfo'
const student =[{
    uuid: 1,
    fullName: 'Nguyen Van A',
    points: 10
  },
  {
    uuid: 2,
    fullName: 'Le Van B',
    points: 8
  },
  {
    uuid: 3,
    fullName: 'Pham Thi C',
    points: 7
  },
  {
    uuid: 4,
    fullName: 'Tran Van D',
    points: 6
  },
  {
    uuid: 5,
    fullName: 'Ta Thi Lang',
    points: 1
  },
]
function ClassWrapper  ()  {
	const [stateStudentList,setStudent] = useState(student)
	const onAddStudent = () =>{
		setStudent([
			[...student],
			{
				uuid:'uuid',
				fullName:'undefined',
				points:0
			}
		])
	}
	const onDisbanStudent = (uuid) => {
		const newList = stateStudentList.filter(a => a.uuid !== uuid)
		setStudent(newList);
	}
	return(
	
		<table style = {{}}>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Points</th>
		</tr>
		{stateStudentList.map(stu => 
			<tr key = {stu.uuid} >
				<td>{stu.uuid}</td>
				<td>{stu.fullName}</td>
				<td>{stu.points}</td>
				{/* <td><button onClick = {onDisbanStudent(stu.uuid)}>Delete</button> </td>  */}
			</tr>
			
		)}
		<tr>
		<th>Action</th>
		<button onClick = {onAddStudent}>Add</button>
		
		</tr>
		{/*  */}
		</table>
		/* {stateStudentList.map((stu) =>{
			<StudentInfo
				key = {stu.uuid}
				onAddNewStudentCallBack = {onAddStudent}
				onDisbanNewStudentCallBack = {onDisbanStudent}
			/>
		} )} */

	

		)
		
}



export default ClassWrapper