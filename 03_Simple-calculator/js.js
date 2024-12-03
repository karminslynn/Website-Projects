
let resultPart = document.getElementById("sonuc");

 const button1 = document.getElementById('add');
 const button2 = document.getElementById('Subtract');


button1.addEventListener('click', add);

button2.addEventListener('click', subt);


function add(){
  const num1 = parseInt(document.querySelector("#num1").value) 
  const num2 = parseInt(document.querySelector("#num2").value) 
sum = num1+num2;
resultPart.textContent = "Sum of these numbers: " + sum;

}

function subt(){

  const num1 = parseInt(document.querySelector("#num1").value) 
  const num2 = parseInt(document.querySelector("#num2").value)
difference = num1-num2;

resultPart.textContent = "Subtraction of these numbers: " + difference;
}

