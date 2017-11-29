var days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var sunday = days_of_the_week.pop();

days_of_the_week.unshift(sunday);

var weekdaysAndWeekends =[["monday","Tuesday","Wednesday","Thursday","Friday"],["Saturday","Sunday"]];

weekdaysAndWeekends.pop();

weekdaysAndWeekends[0].sort();

console.log(weekdaysAndWeekends[0]);