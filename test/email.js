let input = document.querySelector('input');
let button = document.querySelector('button');
// button.addEventListener('click',
function CheckEmail(mail){
	let email = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
	if(email.test(mail)){
		console.log("Valid email")
	}else if(mail = ""){
		
	}else{
		alert("Invalid");
	}
};
CheckEmail('baocd15@gmail.com');


