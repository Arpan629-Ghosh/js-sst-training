const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = days[new Date().getDay()];
switch (today) {
  case "Sunday":
    console.log("Sunday");
    break;
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wednesday":
    console.log("Wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  default:
    console.log("Saturday");
}
