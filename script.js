
const txtBox = document.getElementById("name");


let name = "";
const header = document.getElementById("h");

document.getElementById("click").addEventListener("click",() =>
{
   event.preventDefault();
   name = txtBox.value; 
   header.textContent = "Welcome, " + name + "!";
});

