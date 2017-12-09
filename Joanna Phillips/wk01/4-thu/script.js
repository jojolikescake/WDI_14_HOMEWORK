// there are 3 train lines, All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

// Write a javascript program that works out display the journey when you give it an origin and destination.

// example:


// origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total



var lineMap= {

Alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
Glen_Waverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong","Tooronga"],
Sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran","Windsor"]
}

//run through the stations from the origin stop to the destination stop, listing how many stops there are in between

var destination= "Flagstaff"
var origin="Melbourne Central"
var lines = Object.getOwnPropertyNames(lineMap)
var stations = Object.values(lineMap)
var orgline = "Glen_Waverly"
var destLine = "Glen_Waverly"




function sameLineOrDifferent (){

  if (orgLine===destLine){
    sameLine()
  }

  else {
    differentLines()
  }

}

function isItSameLine(){

  // im trying to figure out how i would determine if they were on the same line if the lines werent hardcoded? 
  // Any ideas? 

for (const prop in lineMap){
  console.log(lineMap[prop])

  for (i=0;i<lineMap[prop].length;i++){
    
    }
  }
}


function sameLine(){
  if (lineMap[orgLine].indexOf(origin) < lineMap[destLine].indexOf(destination)){
    GoForwards()
  }

  else {
    GoBack()
  }
}
 
function differentLines(){
console.warn('differentLines has not been coded yet')
}

function GoForwards (){
  for (i=0;)

console.warn('GoForwards has not been coded yet')
}

function GoBack (){
  console.warning('GoBack has not been coded yet')

}

function PrintStationList(){
  console.warn('PrintStationList has not been coded yet')

}