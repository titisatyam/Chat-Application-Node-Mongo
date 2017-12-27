var moment = require('moment');

// jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan','Feb'];

// var date = new moment();
// date.add(100,'year').subtract(9,'months');
// console.log(date.format('MMM Do, YYYY'));

//10:35 am
var createdAt = 1234;
var date = new moment(createdAt);
console.log(date.format('h:mm a'))