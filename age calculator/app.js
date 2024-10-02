
function calcAge(){
   const birthdate = new Date(document.getElementById("birthdate").value);
   const age = new Date().getFullYear() - birthdate.getFullYear();
   document.getElementById("result").textContent = `You are ${age} years old.`
}