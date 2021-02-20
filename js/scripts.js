console.log("It works");
  let outputTag = document.getElementById('output');
  let akanName = document.getElementById('akanName');

  function getInput(event){
    event.preventDefault()
    let gender = document.querySelector('input[name = gender]:checked').value;
    let date = document.getElementById("date").value;
    
    let myBirthDay = new Date(date).toDateString();
    let day = myBirthDay.split(' ')[0];
    let message = `Seeing as You were born on ${day} and you are ${gender}`;
    outputTag.innerHTML = message;
    akanName.innerHTML = `Your akan Name is ${day}`; //change input

  }
  

//function inputResults(event){
//   let outputTag = document.getElementById('output');
//   let date = document.inputform.date.value
//   let gender = document.getElementById('gender').value

//   let myBirthDay = new Date('date').toDateString();
//   let day = myBirthDay.split(' ')[0];

//   let message = `HEY!Seeing as you were born on ${day} and you are a ${gender}: `;
//   outputTag.innerHTML = message;  

// if (gender=== male){
//   if (day === monday){
//     return "Your Akan name is Kwasi"
//   }else if (day === tuesday){
//     return "Your Akan name is Kwadwo"
//   } else if (day === wednesday) {
//     return "Your Akan name is Kwabena"
//   } else if (day === thurday) {
//     return "Your Akan name is Kwaku"
//   } else if (day === friday) {
//     return "Your Akan name is Yaw"
//   } else if (day === saturday) {
//     return "Your Akan name is Kofi"
//   } else if (day === sunday) {
//     return "Your Akan name is Kwame"
//   }

// }else {
//     if (day === monday) {
//       return "Your Akan name is Akosua"
//     } else if (day === tuesday) {
//       return "Your Akan name is Adwoa"
//     } else if (day === tuesday) {
//       return "Your Akan name is Abenaa"
//     } else if (day === tuesday) {
//       return "Your Akan name is Akua"
//     } else if (day === tuesday) {
//       return "Your Akan name is Yaa"
//     } else if (day === tuesday) {
//       return "Your Akan name is Afua"
//     } else if (day === tuesday) {
//       return "Your Akan name is Ama"
//     }
//     }
// }

// confirming that input is valid
// function validateForm(){

//   if (date <= 0 || date > 31 && month <= 0 || month>12) {
//      alert("Please confirm the date and month is a valid one")}  
// }
