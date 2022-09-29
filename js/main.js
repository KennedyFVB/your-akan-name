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
var day = prompt("Enter your day of birth in DD format: ");
var month = prompt("Enter your month of birth in MM format: ");
var year = prompt("Enter your year of birth in YYYY format: ");
var gender = prompt("Enter your gender in M/F format: ");
var century = year.slice(0, 2);

var dayOfTheWeek =
  (century / 4 -
    2 * parseint(century) -
    1 +
    (5 * parseint(year)) / 4 +
    (26 * (parseint(month) + 1)) / 10 +
    parseint(day)) %
  7;
