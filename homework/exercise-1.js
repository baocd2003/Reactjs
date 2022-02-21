//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firstName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firstName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firstName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firstName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firstName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firstName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
// traineeIterator.forEach((trainee) => {
//   console.log(`${trainee.firstName} ${trainee.lastName}`);
// })



//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
// traineeIterator.forEach((trainee) => {
//   console.log(`${trainee.firstName} ${trainee.lastName} / ${trainee.grade}`);
// })


//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *
// let expectedTraineeArray = traineeIterator.map((trainee) => {
//   return {
//       newId : trainee.className,
//       fullName : `${trainee.firstName} ${trainee.lastName}`,
//       rank : trainee.grade
//   }
// })
// console.log(expectedTraineeArray)

//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *
// function newGrade (grade) {
//   switch(grade){
//     case 'A':
//     return 'Excellent';
//     case 'B':
//     return  'Good';
//     case 'C':
//     return  'Medium'; 
//     case 'D':
//     return 'Weak';
//     case 'E':
//     return 'Poor';
//     case 'F':
//     return  'Disbanded';
//   }
// }
// let newTraineeArray = traineeIterator.map((trainee) => {
//   return {
//     Id  : trainee.id,
//     codename : `${trainee.className}/${trainee.firstName} ${trainee.lastName}`,
//     classification : newGrade(trainee.grade)
//   }
//   }
// )
// console.log(newTraineeArray);


//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *
// let checkGrade = traineeIterator.filter((trainee) => {
//   return trainee.grade !== 'A' && trainee.grade !== 'B';
// })
// console.log(checkGrade);

//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *
// let count = 0;
// let testGrade  = traineeIterator.forEach((trainee) => {
//   if(trainee.grade == 'A' || trainee.grade == 'B' || trainee.grade == 'C'){
//     count++;
//   }
//   }
// )
// if(count >= traineeIterator.length * 50/100){
//     alert('Effective training')
// }else if(count < traineeIterator.length * 30/100){
//     alert("Average training!") 
// }else{
//     alert('Failed Training');
// }

//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
// let findA = traineeIterator.filter((trainee) => {
//   if(trainee.grade == 'A') {
//     let fullName = `${trainee.firstName} ${trainee.lastName}`;
//    alert(fullName) 
//   };
// })
// console.log(findA)

//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
// let findF = traineeIterator.filter((trainee) => {
//   if(trainee.grade == 'F') {
//     let fullName = `${trainee.firstName} ${trainee.lastName}`;
//    alert(fullName) 
//   };
// })
// console.log(findF)


//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *
let string = traineeIterator.reduce((trainee,output) => {
    return trainee + output.grade ;
},"")
console.log(string);


//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *



//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *



