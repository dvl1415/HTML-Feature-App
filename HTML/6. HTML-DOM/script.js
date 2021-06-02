console.log(document.getElementById("header").innerHTML)
console.log(document.getElementById("para").innerHTML)
document.getElementById("header").innerHTML ="This header text coming from JavaScript";
document.getElementById("para").innerHTML ="This para coming from JavaScript";

function editDOMControl(){
    document.getElementById("header").style.backgroundColor = "crimson";
    document.getElementById("header").style.color = "white";
    document.getElementById("firstName").value = "Hello"
}