require 'pry'

days_of_the_week = ["Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday","Sunday"]

sunday = days_of_the_week.pop

days_of_the_week.unshift(sunday)

days_of_the_week = [["Monday", "Tuesday","Wednesday", "Thursday","Friday"],["Saturday","Sunday"]]

days_of_the_week.delete_at(1)

days_of_the_week[0].sort!

binding.pry # pauses your program 

puts('end of program') #this is neccesary for binding.pry to work