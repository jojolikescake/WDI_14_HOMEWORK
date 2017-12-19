#Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {
  name:"Michelangelo",
  weapon:"Nunchuks", 
  radical:true,
  age:35,
}

ninja_turtle.delete(:radical)

ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

ninja_turtle[:pizza_toppings][0]

keys_array = ninja_turtle.keys