/*
Given a date string, dateString , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.
*/

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  let date = new Date(dateString).getDay()

  if (date === 0) {
    dayName = "Sunday"
  } else if (date === 1) {
    dayName = "Monday"
  } else if (date === 2) {
    dayName = "Tuesday"
  } else if (date === 3) {
    dayName = "Wednesday"
  } else if (date === 4) {
    dayName = "Thursday"
  } else if (date === 5) {
    dayName = "Friday"
  } else {
    dayName = "Saturday"
  }

  return dayName;
}