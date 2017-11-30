// there are 3 train lines, All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

// Write a javascript program that works out display the journey when you give it an origin and destination.

// example:


// origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total



var linemap= {

Alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
Glen_Waverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong","Tooronga"],
Sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran","Windsor"]
}

//run through the stations from the origin stop to the destination stop, listing how many stops there are in between

destination= "Windsor"
origin="Melbourne Central"
dline="Glen_Waverly"
oline="Sandringham"
document.write("Origin: "+origin+"<br/>")

document.write("Destination: "+destination+"<br/>")

 
if (oline===dline){

 if (linemap[dline].indexOf(destination) > linemap[oline].indexOf(origin)){
  //train is running forwards through the array

  for (var i = linemap[oline].indexOf(origin); i <= linemap[oline].indexOf(destination);i++){
 document.write(linemap[oline][i]+"--->")
}

document.write("<br/> "+(linemap[oline].indexOf(destination)-linemap[oline].indexOf(origin))+" stops total")
} else{
    //train is running backwards through the array
   var linereverse = linemap[oline].reverse()
    //reverse the line order
    for (var i = linereverse.indexOf(origin); i <= linereverse.indexOf(destination);i++){
    document.write(linereverse[i]+"----> ")
   
  }
   document.write("<br/> "+Math.abs(linereverse.indexOf(destination)-linereverse.indexOf(origin))+" stops total")
}
}

else { 

  //this is the bit im confused by, if the two lines arent the same, i want it to loop through until it reaches richmond, then change lines
  for (var i = linemap[oline].indexOf(origin); i === linemap[oline].indexOf("Richmond");i++){
     
  }
}