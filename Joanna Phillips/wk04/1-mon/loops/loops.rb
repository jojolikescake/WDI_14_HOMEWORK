
print "choose your lower number"
lower = gets.to_i
print "choose your upper number"
upper = gets.to_i

randnumber = rand(lower..upper)


print "Please guess a number between "+lower.to_s+" and "+upper.to_s+"="
guess = gets.to_i

while guess != randnumber  do

  print "Please guess a number between "+lower.to_s+" and "+upper.to_s+"="
  guess =  gets.to_i
  if guess > randnumber
     puts "guess lower!"
  elsif guess < randnumber
     puts "guess higher!"
  end
end

print "you got it!"


