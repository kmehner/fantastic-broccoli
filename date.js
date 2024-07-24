/* 

DATE OBJECT: A js object that represents a date and time. 
It allows you to work with dates and times in your applications.
Data can be stored in the following formats:
- String: "December 17, 1995 03:24:00"
- Number: 1542412800000 (milliseconds since Jan 1, 1970)
- Array: [2021, 11, 17, 3, 24, 0, 0] 

CREATING A NEW DATE OBJECT with the new Date() syntax 
- it creates a new instance of the date object without any arguments
- when used without arguments, it returns the current date and time 

*/

// Date object - creating a new date object with the current date and time 
let currentDate = new Date(); 
console.log("Current Date:", currentDate); // Current Date: 2024-07-24T19:11:35.883Z

// Create a new date object with a specified date and time 
let specificDate = new Date("2024-02-10T08:00:00");
console.log("Specific Date:", specificDate); // Specific Date: 2024-02-10T16:00:00.000Z

// JS date methods 
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();
let millisecond = currentDate.getMilliseconds();

console.log("Year:", year); // 2024 
console.log("Month:", month); // 7
console.log("Day:", day); // 24 
console.log("Hour:", hour); // 12 
console.log("Minute:", minute); // 15
console.log("Second:", second); // 26 
console.log("Millisecond:", millisecond); // 318 

// Manipulate date objects 
currentDate.setDate(currentDate.getDate() + 7); // Add 7 days 
console.log("Date after adding 7 days:", currentDate); 

currentDate.setMonth(currentDate.getMonth() - 1); // Subtract 1 month 
console.log("Date after subtracting 1 month:", currentDate); 

// Convert timestamps to dates 
let timestamp = currentDate.getTime(); 
console.log("Timestamp:", timestamp) // 1719861720323

let newDate = new Date(timestamp); 
console.log("Date from timestamp:", newDate); // Date from timestamp: 2024-07-01T19:22:35.901Z

// Handling time zones 
// Javascript Dates objects are based on the user's local timezone 
// getTimezoneOffset() method returns the TIME ZONE OFFSET in minutes
// the time zone offset refers to the difference in time between the local time and UTC (coordinated universal time)

let timeZoneOffset = currentDate.getTimezoneOffset(); 
console.log("Time Zone Offset:", timeZoneOffset); // Time Zone Offset: 420