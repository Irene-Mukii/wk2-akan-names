console.log('It works');
  let outputTag = document.getElementById('output');
  let akanName = document.getElementById('akanName');

let femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
let maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  function getInput(event){
    event.preventDefault()
    let gender = document.querySelector('input[name = gender]:checked').value;
    let date = document.getElementById('date').value;

    
    let myBirthDay = new Date(date).toDateString();
    let currentDate = new Date().toDateString();
    console.log(currentDate);
    if (myBirthDay>currentDate) {
      console.log("Birth date cannot be later than current date");
    }
    let day = myBirthDay.split(' ')[0];
    let message = `Seeing as You were born on ${day} and you are ${gender}`;
    outputTag.innerHTML = message;
    let name;

    if(gender === 'male' ){
      if(day === 'Sun'){
        name = console.log(maleAkanNames[0]);
      } else if(day === 'Mon'){
        name = console.log(maleAkanNames[1]);
      } else if (day === 'Tue') {
        name = console.log(maleAkanNames[2]);
      } else if (day === 'Wed') {
        name = console.log(maleAkanNames[3]);
      } else if (day === 'Thu') {
        name = console.log(maleAkanNames[4]);
      } else if (day === 'Fri') {
        name = console.log(maleAkanNames[5]);
      } else {
        name = console.log(maleAkanNames[6]);
      }
    }else {
      if (day === 'Sun') {
        name = console.log(femaleAkanNames[0]);
      } else if (day === 'Mon') {
        name = console.log(femaleAkanNames[1]);
      } else if (day === 'Tue') {
        name = console.log(femaleAkanNames[2]);
      } else if (day === 'Wed') {
        name = console.log(femaleAkanNames[3]);
      } else if (day === 'Thu') {
        name = console.log(femaleAkanNames[4]);
      } else if (day === 'Fri') {
        name = console.log(femaleAkanNames[5]);
      } else {
      name = console.log(femaleAkanNames[6]);}
    }
    akanName.innerHTML = `Your akan Name is ${name}`; //change input
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
//     return 'Your Akan name is Kwasi'
//   }else if (day === tuesday){
//     return 'Your Akan name is Kwadwo'
//   } else if (day === wednesday) {
//     return 'Your Akan name is Kwabena'
//   } else if (day === thurday) {
//     return 'Your Akan name is Kwaku'
//   } else if (day === friday) {
//     return 'Your Akan name is Yaw'
//   } else if (day === saturday) {
//     return 'Your Akan name is Kofi'
//   } else if (day === sunday) {
//     return 'Your Akan name is Kwame'
//   }

// }else {
//     if (day === monday) {
//       return 'Your Akan name is Akosua'
//     } else if (day === tuesday) {
//       return 'Your Akan name is Adwoa'
//     } else if (day === tuesday) {
//       return 'Your Akan name is Abenaa'
//     } else if (day === tuesday) {
//       return 'Your Akan name is Akua'
//     } else if (day === tuesday) {
//       return 'Your Akan name is Yaa'
//     } else if (day === tuesday) {
//       return 'Your Akan name is Afua'
//     } else if (day === tuesday) {
//       return 'Your Akan name is Ama'
//     }
//     }
// }

