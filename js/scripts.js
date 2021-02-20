let outputTag = document.getElementById('output');
let akanName = document.getElementById('akanName');

let femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
let maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  function getInput(event){
    event.preventDefault()
    let gender = document.querySelector('input[name = gender]:checked').value;
    let date = document.getElementById('date').value;
    let myBirthDay = new Date(date).toDateString();
    console.log(new Date());
    console.log(myBirthDay);

    if (new Date(date) > new Date()) {
      alert("Birth date cannot be later than current date");
      document.getElementById("inputForm").reset();
      //RESET!!!!
    }else{
    let day = myBirthDay.split(' ')[0];
    let message = `Seeing as You were born on ${day} and you are ${gender}`;
    outputTag.innerHTML = message;
    let name;

    if(gender === 'male' ){
      if(day === 'Sun'){
        
        name = maleAkanNames[0];
      } else if(day === 'Mon'){
        
        name = maleAkanNames[1];
      } else if (day === 'Tue') {
        
        name = maleAkanNames[2];
      } else if (day === 'Wed') {
        
        name = maleAkanNames[3];
      } else if (day === 'Thu') {
        
        name = maleAkanNames[4];
      } else if (day === 'Fri') {
        
        name = maleAkanNames[5];
      } else {
      
        name = maleAkanNames[6];
      }
    }else {
      if (day === 'Sun') {
        
        name = femaleAkanNames[0];
      } else if (day === 'Mon') {
        
        name = femaleAkanNames[1];
      } else if (day === 'Tue') {
        
        name = femaleAkanNames[2];
      } else if (day === 'Wed') {
        
        name = femaleAkanNames[3];
      } else if (day === 'Thu') {
        
        name = femaleAkanNames[4];
      } else if (day === 'Fri') {
        
        name = femaleAkanNames[5];
      } else {
        
      name = femaleAkanNames[6];}
    }
    akanName.innerHTML = `Your akan Name is ${name}`; //change input
    alert("YOUR AKAN NAME IS " + name);
  }
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

