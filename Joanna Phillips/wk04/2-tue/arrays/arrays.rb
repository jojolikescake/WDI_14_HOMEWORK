planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

puts planeteers[1]

planeteers.push("Heart")

planeteers = planeteers-["Captain planet"]

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = (planeteers << rangers).flatten!

heroes.sort!

heroes.shuffle