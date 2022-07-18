let no = document.querySelector('.no');
let icon = document.querySelector('.icon');
let song = document.querySelector('#song');
no.addEventListener('mouseover',function() {
	let i = Math.floor(Math.random() * 180);
	let j = Math.floor(Math.random() * 180);

	no.style.left = i + 'px';
	no.style.top = j + 'px';
})
let check = true;
icon.addEventListener('click',function(){
	
	if(check){
		song.play();
	}
	console.log(check);
	check = !check;
})
