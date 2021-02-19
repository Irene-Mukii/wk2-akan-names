console.log("It works");

 let outputTag = document.getElementById('output')
 console.log(outputTag)

 let message = 'HEY! MISS AFRICA'

 outputTag.innerHTML = message;

// checking if the input has been read

var date = form.date.value;
var month = form.month.value;
var year = form.year.value;
var gender = form.gender.value;

function inputResults(form){
  alert ("Your date of birth is: " + date + month + "and you are a " + gender);
}

//Changing input to intergers
var date = parseInt();
var month = parseInt();
var year = parseInt();

// confirming that input is valid
function validateForm(){
  if (date <= 0 || date > 31 && month <= 0 || month>12) { alert("Please confirm the date and month is a valid one")  
};
