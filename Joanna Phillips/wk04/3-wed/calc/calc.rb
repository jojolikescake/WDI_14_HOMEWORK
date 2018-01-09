require 'pry'

puts "Do you want to quit? y/n"
quit = gets

while quit != "y" 
  puts "Please choose a method. a for addition, s for subtraction, d for divide or m for muliply"
  operator = gets.chomp

  puts "Please enter your first number"

  firstnum = gets.chomp

  puts "Please enter your second number"

  secondnum = gets.chomp

  if operator=="a"
   result = firstnum.to_i+secondnum.to_i
  elsif operator=="s"
    result = firstnum.to_i-secondnum.to_i
  elsif operator=="m"
    result = firstnum.to_i*secondnum.to_i
  elsif operator=="d"
    result = firstnum.to_i/secondnum.to_i
  end
  puts "The answer is "+result.to_s
  puts "Quit? y/n"
  quit = gets
  binding.pry
end

  
  
   
  