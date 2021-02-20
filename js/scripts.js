let outputTag = document.getElementById('output');
let akanName = document.getElementById('akanName');
let femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
let maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

function getInput(event){
  event.preventDefault()
  let gender = document.querySelector('input[name = gender]:checked');
  let date = document.getElementById('date').value;
  let myBirthDay = new Date(date).toDateString();

  if (new Date(date) > new Date()) {
    alert("Birth date cannot be later than current date");
    document.getElementById("inputForm").reset();
  } else if (gender === null || date === ''){
    alert("Date or Gender cannot be void, please input your date and gender")
    document.getElementById("inputForm").reset();
  }else{
    let day = myBirthDay.split(' ')[0];
    let myGender = gender.value;
    let message = `Seeing as You were born on ${day} and you are ${myGender}`;
    outputTag.innerHTML = message;
    let name;

    if(myGender === 'male' ){
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
    akanName.innerHTML = `Your akan Name is ${name}`;
    alert("YOUR AKAN NAME IS " + name);
  }
}
  

