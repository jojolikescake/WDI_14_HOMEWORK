// there are 3 train lines, All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

// Write a javascript program that works out display the journey when you give it an origin and destination.

// example:


// origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total



var linemap= [["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong","Tooronga"], 
["Southern Cross", "Richmond", "South Yarra", "Prahran","Windsor"]]


//run through the stations from the origin stop to the destination stop, listing how many stops there are in between

var destination= prompt("What is your destination?")
var origin=prompt("what is your origin?")
document.write("Origin: "+origin+"<br/>")

document.write("Destination: "+destination+"<br/>")

for (i=0;i<linemap.length;i++){
  for (j=0;j< linemap[i].length;j++){
if (linemap[i][j].indexOf(origin)===
  linemap[i][j].indexOf(destination)){
  console.log("line is the same")
 }
}
}