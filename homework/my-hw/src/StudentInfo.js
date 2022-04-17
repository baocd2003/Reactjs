const StudentInfo = ({name,onAddNewStudentCallBack,onDisbanNewStudentCallBack}) =>{
	return(
		<tr>
			<td>{name.uuid}</td>
			<td>{name.fullName}</td>
			<td>{name.points}</td>
			<td>
				<button onClick = {() => { onAddNewStudentCallBack({
					uuid:'uuid',
					fullName:'undefined',
					points:0
				})}}>
					Add
				</button>
				<button onClick = {() => { onDisbanNewStudentCallBack(name.uuid)}}>
					Delete
				</button>
			</td>
		</tr>
		
	)
}
export default StudentInfo