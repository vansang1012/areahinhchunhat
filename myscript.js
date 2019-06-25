function sayhello(){
	let inputWidth;
	let inputHeight;
	inputWidth=prompt("Moi ban nhap chieu rong");
	inputHeight=prompt("Moi ban nhap chieu cao");
	
	let Width=parseInt(inputWidth);
	let Height=parseInt(inputHeight);
	let area=Width*Height;
	document.write("the area is = " + area);
}