function volume_sphere() {
    //Write your code here
	let radius =document.querySelector("#radius");
	let volume=document.querySelector("#volume");
	let r=radius.value;
	if(r>0){
	
		let v=4/3*Math.PI*r*r*r;
		volume.value=v.toFixed(4);
	}else{
		volume.value=NaN;
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
