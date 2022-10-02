function getAkanName () {
  let year = document.getElementById("year-input").value;
  let month = Number(document.getElementById("month-input").value);
  let day = Number(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");

  // function to get gender
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

 let myGenderValue = getGender();
 console.log(myGenderValue);

// validation functions
function monthValidator() {
  if (month < 1 || month > 12) {
    return false;
  } else {
    return true;
  }
}

function dayValidator() {
  if (month === 2 && Number(year) % 4 === 0) {
    if (day > 28 || day < 1) {
      return false;
    } else if (month === 2 && day > 29) {
      return false;
    } else if (month === 2 && day < 1) {
      return false;
    } else {
      return true;
    }
  } else if (day < 1 || day > 31) {
    return false;
  } else {
    return true;
  }
}

//validation variables
let monthValid = monthValidator();
let dayValid = dayValidator();

//formula to determine day of birth (Sunday = 1, Monday = 2)etc..
let dayOfWeekNumber = Math.floor((((Number(year.slice(0,2))/4)-2*Number(year.slice(0,2))-1)+
((5*Number(year.slice(2,4))/4))+((26*(month+1)/10))+day)%7);


//creating arrays of Akan names for males & females and days of the week
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];



// generating and index value to select items on arrays
let index;
// fix formula bug
if (dayOfWeekNumber == 0){
  index = 1;
 } else {
  index = dayOfWeekNumber + 1;
 }

 console.log(index);

if (myGenderValue == "male" && monthValid && dayValid) {
  document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
  document.getElementById('display-name').textContent = "Here is your Akan name: ";
  document.getElementById('result').style.fontSize = "18px";
  document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
  return false;
} else if (myGenderValue == "female" && monthValid && dayValid) {
  document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
  document.getElementById('display-name').textContent = "Here is your Akan name: ";
  document.getElementById('result').style.fontSize = "18px";
  document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
  return false;
} else {
  alert("You entered an invalid day or month, please try again");
}



// var day = null;
// var month = null;
// var year = null;
// var gender = null;

// // get user input
// //get user's birthday
// //get user's gender

// // calculate day of birth

// function getUserInput() {
//   day = prompt("Enter your day of birth in DD format: ");
//   month = prompt("Enter your month of birth in MM format: ");
//   year = prompt("Enter your year of birth in YYYY format: ");
//   gender = prompt("Enter your gender in M/F format: ");
//   century = year.slice(0, 2);
//   dd = parseInt(day);
//   mm = parseInt(month);
//   yy = parseInt(year);
//   cc = parseInt(century);
// }

// function getAkanName(day, month, year, gender) {
//   // var dayOfTheWeek = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1)/10)) + dd) % 7;

//   // var dayOfTheWeek = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
//   // ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

//   var dayOfTheWeek = Math.floor(
//     (Number(year.slice(0, 2)) / 4 -
//       2 * Number(year.slice(0, 2)) -
//       1 +
//       (5 * Number(year.slice(2, 4))) / 4 +
//       (26 * (month + 1)) / 10 +
//       day) %
//       7
//   );

//   var indexOfDay = DAYS_OF_THE_WEEK.indexOf(dayOfTheWeek);
//   var name = null;

//   if (gender.toLocaleLowerCase().startsWith("m")) {
//     name = MALE_NAMES[indexOfDay];
//   } else if (gender.toLocaleLowerCase().startsWith("f")) {
//     name = FEMALE_NAMES[indexOfDay];
//   } else {
//     console.log("Invalid gender");
//   }

//   return name;
}
