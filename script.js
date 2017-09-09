reset();//Resets Everything
 let weight, firstOption, secondOption;

//Gets the weight input and places the value of it in the blue box
document.getElementById('weightInput').addEventListener('input', getWeightInput);
function getWeightInput (e){
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('resetBTN').style.visibility = 'visible';
 weight = e.target.value;//Gets input Value
 document.getElementById('weightOutput').innerHTML = weight;//placing the value to the DOM
 weightConverter();
}

//Gets weight option
document.getElementById('firstOption').addEventListener('change', getFirstOption);
// Changes and Grabs placeholder value for weight type
function getFirstOption(e){
 firstOption = e.target.value; //Gets placeholder value
   document.getElementById('weightInput').placeholder = 'Enter ' +firstOption+ '...';
   document.getElementById('weightName').innerHTML = firstOption + ":";
   weightConverter();
}

document.getElementById('secondOption').addEventListener('change', getSecondOption);
function getSecondOption (e){
  secondOption = e.target.value;
    document.getElementById('convertedWeightName').innerHTML = secondOption+ ":";
    weightConverter();
}

//Convert weights
function weightConverter (){
//Need to figure out the logic dynamically
//Validates for pounds
//Todo: Figure an algorithm to shorten code, make a function to print out finalOutput
const finalOutput = document.querySelector('#finalOutput');

if(firstOption == "Pounds" && secondOption == "Grams"){
  finalOutput.innerHTML = weight*453.59237;
} else if (firstOption == "Pounds" && secondOption == "Kilograms") {
  finalOutput.innerHTML = weight*0.453592;
} else if (firstOption == "Pounds" && secondOption == "Milligrams") {
    finalOutput.innerHTML = weight*453592.0000001679;
} else if (firstOption == "Pounds" && secondOption == "Micrograms") {
    finalOutput.innerHTML = weight*453591999.86863;
}else if (firstOption == "Pounds" && secondOption == "US Tons") {
  finalOutput.innerHTML = weight*0.0004999995920000043512;
}else if (firstOption == "Pounds" && secondOption == "Ounces") {
  finalOutput.innerHTML = weight*15.999986944000138323;
}
  //Validates for grams
else if (firstOption == "Grams" && secondOption == "Pounds") {
  finalOutput.innerHTML = weight*0.00220462;
}else if (firstOption == "Grams" && secondOption == "Kilograms") {
  finalOutput.innerHTML = weight*0.001;
}else if (firstOption == "Grams" && secondOption == "Milligrams") {
  finalOutput.innerHTML = weight*1000;
}else if (firstOption == "Grams" && secondOption == "Micrograms") {
  finalOutput.innerHTML = weight*1e+6;
}else if (firstOption == "Grams" && secondOption == "US Tons") {
  finalOutput.innerHTML = weight*1.1023e-6;
}else if (firstOption == "Grams" && secondOption == "Ounces") {
  finalOutput.innerHTML = weight*0.035274;
}
//Validates for Kilograms
else if (firstOption == "Kilograms" && secondOption == "Grams") {
finalOutput.innerHTML = weight*1000;
}else if (firstOption == "Kilograms" && secondOption == "Pounds") {
  finalOutput.innerHTML = weight*2.20462;
}else if (firstOption == "Kilograms" && secondOption == "Milligrams") {
  finalOutput.innerHTML = weight*1e+6;
}else if (firstOption == "Kilograms" && secondOption == "Micrograms") {
  finalOutput.innerHTML = weight*1e+9;
}else if (firstOption == "Kilograms" && secondOption == "US Tons") {
  finalOutput.innerHTML = weight*0.00110231;
}else if (firstOption == "Kilograms" && secondOption == "Ounces") {
  finalOutput.innerHTML = weight*35.274;
}
//Validates for Milligram
else if (firstOption == "Milligrams" && secondOption == "Pounds") {
  finalOutput.innerHTML = weight*2.2046e-6;
}else if (firstOption == "Milligrams" && secondOption == "Kilograms") {
  finalOutput.innerHTML = weight*1e-6;
}else if (firstOption == "Milligrams" && secondOption == "Grams") {
  finalOutput.innerHTML = weight*0.001;
}else if (firstOption == "Milligrams" && secondOption == "Micrograms") {
  finalOutput.innerHTML = weight*1000;
}else if (firstOption == "Milligrams" && secondOption == "US Tons") {
  finalOutput.innerHTML = weight*1.1023e-9;
}else if (firstOption == "Milligrams" && secondOption == "Ounces") {
  finalOutput.innerHTML = weight*3.5274e-5;
}
//Validates for Microgram
else if (firstOption == "Micrograms" && secondOption == "Pounds") {
  finalOutput.innerHTML = weight*2.2046e-9;
}else if (firstOption == "Micrograms" && secondOption == "Kilograms") {
  finalOutput.innerHTML = weight*1e-9;
}else if (firstOption == "Micrograms" && secondOption == "Milligrams") {
  finalOutput.innerHTML = weight*0.001;
}else if (firstOption == "Micrograms" && secondOption == "Grams") {
  finalOutput.innerHTML = weight*1e-6;
}else if (firstOption == "Micrograms" && secondOption == "US Tons") {
  finalOutput.innerHTML = weight*1.1023e-12;
}else if (firstOption == "Micrograms" && secondOption == "Ounces") {
  finalOutput.innerHTML = weight*3.5274e-8;
}
//Validates for US Ton
else if (firstOption == "US Tons" && secondOption == "Pounds") {
  finalOutput.innerHTML = weight*2000;
}else if (firstOption == "US Tons" && secondOption == "Kilograms") {
  finalOutput.innerHTML = weight*907.185;
}else if (firstOption == "US Tons" && secondOption == "Milligrams") {
  finalOutput.innerHTML = weight*9.072e+8;
}else if (firstOption == "US Tons" && secondOption == "Micrograms") {
  finalOutput.innerHTML = weight*9.072e+11;
}else if (firstOption == "US Tons" && secondOption == "Grams") {
  finalOutput.innerHTML = weight*907185;
}else if (firstOption == "US Tons" && secondOption == "Ounces") {
  finalOutput.innerHTML = weight*32000;
}
//Validates for Ounce
else if (firstOption == "Ounces" && secondOption == "Pounds") {
  finalOutput.innerHTML = weight*0.0625;
}else if (firstOption == "Ounces" && secondOption == "Kilograms") {
  finalOutput.innerHTML = weight*0.0283495;
}else if (firstOption == "Ounces" && secondOption == "Milligrams") {
  finalOutput.innerHTML = weight*28349.5;
}else if (firstOption == "Ounces" && secondOption == "Micrograms") {
  finalOutput.innerHTML = weight*2.835e+7;
}else if (firstOption == "Ounces" && secondOption == "US Tons") {
  finalOutput.innerHTML = weight*3.125e-5;
}else if (firstOption == "Ounces" && secondOption == "Grams") {
  finalOutput.innerHTML = weight*28.3495;
}
//Validates if first option is the same as second option
else {
    finalOutput.innerHTML = weight;
}
}

//Clears out all values and reset DOM
document.getElementById('resetBTN').addEventListener('click', reset);
function reset(){
  document.getElementById('mainForm').reset();
  document.getElementById('output').style.visibility = 'hidden';
  document.getElementById('resetBTN').style.visibility = 'hidden';
}
