function volume_sphere() {
    //Write your code here
	let radius =document.querySelector("#radius");
	let volume=document.querySelector("#volume");
	let r=radius.value;
	if(r>0){
		let pi=3.14;
		let v=4/3*pi*r*r*r;
		volume.value=v;
	}else{
		volume.value=NaN;
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
