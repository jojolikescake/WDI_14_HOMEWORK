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

var origin="Flagstaff"
var destination= "Windsor"
var lines = Object.getOwnPropertyNames(lineMap)
var stations = Object.values(lineMap)
var orgLine = "Glen_Waverly"
var destLine = "Sandringham"

//calculating indexes

function OriginIndex() {
lines.forEach(function(elem){
  if (lineMap[elem].indexOf(origin)>-1){
  return lineMap[elem].indexOf(origin)
    }
  })
}



var stationList = []




function sameLineOrDifferent (){

  if (orgLine===destLine){
    sameLine()
  }

  else {
    differentLines()
  }

}



function isItSameLine(){
let test;
for (const prop in lineMap){
  if(lineMap[prop].includes(origin) && lineMap[prop].includes(destination)){
    sameLine()
test = 0;
  }
}if (test!==0) {
return differentLines()
}
}




function sameLine(){
  if (lineMap[orgLine].indexOf(origin) < lineMap[destLine].indexOf(destination)){
    GoForwardsSameLine()
  }

  else {
    GoBackSameLine()
  }
}
 
function differentLines(){
  if (lineMap[orgLine].indexOf('Richmond') > lineMap[orgLine].indexOf(origin)){

  }
}

function GoForwardsSameLine (){
  for (i=lineMap[orgLine].indexOf(origin);i<=lineMap[orgLine].indexOf(destination);i++){
    stationList.push(lineMap[orgLine][i])
    
    if (i===lineMap[orgLine].indexOf(destination)){
      PrintStationList()
    }
  }
}

function GoBackSameLine (){
for (i=lineMap[orgLine].indexOf(origin);i>=lineMap[orgLine].indexOf(destination);i--){
  stationList.push(lineMap[orgLine][i])
      if (i===lineMap[orgLine].indexOf(destination)){
      PrintStationList()
    }

  }

}

function goForwardsTowardRichmond(){
  for (i=lineMap[orgLine].indexOf(origin);i<=lineMap[orgLine].indexOf('Richmond');i++){
    stationList.push(lineMap[orgLine][i])
    
    if (i===lineMap[orgLine].indexOf('Richmond')){
      changeLines()
    }
  }
}

function goBackTowardsRichmond (){
  for (i=lineMap[orgLine].indexOf(origin);i<=lineMap[orgLine].indexOf(Richmond);i++){
    stationList.push(lineMap[orgLine][i])
    
    if (i===lineMap[orgLine].indexOf('Richmond')){
      PrintStationList()
    }
  }
}

function goForwardFromRichmond(){
  for (i=lineMap[destLine].indexOf("Richmond");i<=lineMap[destLine].indexOf(destination);i++){
    stationList.push(lineMap[destLine][i])
    
    if (i===lineMap[orgLine].indexOf(destination)){
      PrintStationList()
    }
  }
}

function goBackFromRichmond (){
  for (i=lineMap[orgLine].indexOf(origin);i<=lineMap[orgLine].indexOf('Richmond');i++){
    stationList.push(lineMap[orgLine][i])
    
    if (i===lineMap[orgLine].indexOf('Richmond')){
      changeLines()
    }
  }
}

function changeLines (){
  if (lineMap[destLine].indexOf(destination)> lineMap[destLine.indexOf('Richmond')]){
    goForwardFromRichmond()
  }

  else {
    goBackFromRichmond()
  }
}

function PrintStationList(){
 console.log(stationList.join('--->'))

}