

document.addEventListener("click",function() {    
    document.getElementById("id1").innerHTML = "licenciado en enfermeria";          
}) 

document.getElementById("color nuevo").addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";                 
});  
document.getElementById("color original").addEventListener("click", function() {
    document.body.style.backgroundColor = "chocolate";                 
});  
document.getElementById("borrar texto").addEventListener("click", function() {
    document.getElementById("cabecera").style.display = "none";
});


const collection = document.getElementsByClassName("c2");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "green";
}
