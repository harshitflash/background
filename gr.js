var color1= document.querySelector(".color1")
var color2= document.querySelector(".color2")
var para= document.querySelector("p")
var body= document.querySelector("body")

function bg_change(){
    body.style.background="linear-gradient(to right, "+color1.value +"," +color2.value+")";
    para.textContent=body.style.background + ';';
}

color1.addEventListener("input",bg_change)
color2.addEventListener("input",bg_change)












// var cp1=document.getElementsByClassName('color1')[0]
// var cp2=document.getElementsByClassName('color2')[0]
// var output=document.getElementById('css')
// var body=document.getElementById("body")


// cp1.addEventListener('input',function (){
//     body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ cp1.value 
// 	+ "," 
// 	+ cp2.value 
// 	+ ")";
//     // body.style.background=
//     //"linear-gradient(to right,"
//     // + cp1.value 
//     // "," 
//     // + cp2.value
//     // ")";
   
    
// })
// cp2.addEventListener("input", function(){
    
// })