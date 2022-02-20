class Employee{
	constructor(firstName,lastName,Id,salary){
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
		this.Id = Id;
	}

	getFullName(){
		console.log(`${this.firstName} ${this.lastName}`);
	}

	getSalary(){
		console.log(`Luong tháng: ${this.salary}`);
	}

	setSalary(salary){
		this.salary = salary;
	}

	getAnnualSalary(){
		console.log(`Lương năm ${this.salary * 12}`);
	}

	getId(){
		console.log(`Mã nhân viên : ${this.Id}`)
	}
	
	raiseSalary(percent){
		let out = this.salary * (1 + percent/100);
		console.log(out);
	}
}

class ParttimeEmployee extends Employee{
	constructor(firstName,lastName,Id,salary,wage){
		super(firstName,lastName,Id,salary);
		this.wage = wage;
	}
	getSalary(month,hour){
		let salary = this.wage * hour;
		this.salary = salary;
		console.log(salary);
	}
	getAnnualSalary(){
		let out = this.salary * 12;
		console.log(out)
	}
}
let b = new ParttimeEmployee("Bao","Cao","hjh",2000000,20000);
b.getSalary(2,5);
b.getAnnualSalary();




