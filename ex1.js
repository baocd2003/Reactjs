// 1.khi console.log biến x ở ngoài thì sẽ bị undefined 
// sum sẽ bằng 15 vì đã có biến sum ở bên ngoài

//2. Gía trị sẽ là từ 0 - 11(số tự nhiên) do có Math.floor()

// 3.function Average(x = 5,y = 10){
// 	return Math.floor((x + y)/2);
// }
// console.log(Average(4));

// 5.
// const trainer = {
	// 	name: 'Jason Nguyen',
	// 	age: 33,
	// 	mainSkills: ['React', 'Typescript'],
	// 	isMarried: true
	//   };
	// const{name,age,mainSkills,isMarried} = trainer;
// console.log(name,age,mainSkill,isMarried);

// 4.function checkTrainer(person1,person2){
// 	if(person1.averageRank > person2.averageRank){
// 		console.log(person1);
// 	}else{
// 		console.log(person2);
// 	}
// 	let max = person1.averageRank;
// 	if(max < person2.averageRank){
// 		max = person2.averageRank;
// 	}
// 	console.log(`${'Max:'} ${max}`);
// 	if(max < 8){
// 		console.log('Lớp tự học')
// 	}else{
// 		console.log("Sẽ là trainer");
// 	}
// }
// person1 = {
// 	name :  'Bao',
// 	age : 18,
// 	averageRank : 5
// }
// person2 = {
// 	name :  'Long',
// 	age : 18,
// 	averageRank : 8
// }
// checkTrainer(person1, person2);

//6. 
// const {name:fullName,age:yearsOld,mainSkills:strongPoints,isMarried:hasAWife} = trainer;
// console.log(fullName + "; " + yearsOld + "; " + strongPoints + "; " + hasAWife);

// 8.const clonedTrainer = { ...trainer};
// clonedTrainer.hasAnyCert = true;
// clonedTrainer.isOverloaded = false;


// 9.function speardSyntax(x, y, ...p){
// 	console.log("p1 is " + x + "; p2 is" + y);
// 	console.log(...p);
//   }	
  
  






