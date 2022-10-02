const MALE_NAMES = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const FEMALE_NAMES = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];
const DAYS_OF_THE_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// get user input
//get user's birthday
//get user's gender

// calculate day of birth

function getUserInput() {
  var day = prompt("Enter your day of birth in DD format: ");
  var month = prompt("Enter your month of birth in MM format: ");
  var year = prompt("Enter your year of birth in YYYY format: ");
  var gender = prompt("Enter your gender in M/F format: ");
  var century = year.slice(0, 2);
}

// var dayOfTheWeek =
//   (parseint(century) / 4 -
//     2 * parseint(century) -
//     1 +
//     (5 * parseint(year)) / 4 +
//     (26 * (parseint(month) + 1)) / 10 +
//     parseint(day)) %
//   7;

// var indexOfDay = DAYS_OF_THE_WEEK.indexOfDay(dayOfTheWeek);
// var name = null;

// if (gender.toLocaleLowerCase().startsWith("m") === "m") {
//   name = MALE_NAMES[indexOfDay];
// } else if (gender.toLocaleLowerCase().startsWith("f")) {
//   name = FEMALE_NAMES[indexOfDay];
// } else {
//   console.log("Invalid gender");
// }

function getAkanName(day, month, year, gender) {
  var dayOfTheWeek =
    (parseint(century) / 4 -
      2 * parseint(century) -
      1 +
      (5 * parseint(year)) / 4 +
      (26 * (parseint(month) + 1)) / 10 +
      parseint(day)) %
    7;

  var indexOfDay = DAYS_OF_THE_WEEK.indexOfDay(dayOfTheWeek);
  var name = null;

  if (gender.toLocaleLowerCase().startsWith("m") === "m") {
    name = MALE_NAMES[indexOfDay];
  } else if (gender.toLocaleLowerCase().startsWith("f")) {
    name = FEMALE_NAMES[indexOfDay];
  } else {
    console.log("Invalid gender");
  }

  return name;
}

function main() {
  getUserInput();
  var userAkanName = getAkanName(day, month, year, gender);
  console.log("Your name is " + userAkanName);
}
