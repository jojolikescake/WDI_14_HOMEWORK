require 'pry'

print "Enter filename:"

filename = gets().chomp()

File.readlines(filename).size

binding.pry # pauses your program 

puts('end of program') #this is neccesary for binding.pry to work
