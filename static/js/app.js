// from data.js
var tableData = data;

// YOUR CODE HERE!

// select tbody
var tbody = d3.select("tbody")
console.log(data)

let tr = d3.select("tbody > tr");
Object.entries(data[0]).forEach( function([key,value]) {
    let cell=tr.append("th");
    cell.text(key);
 }); 


data.forEach( day => {
     let tr =  tbody.append("tr");
     Object.entries(day).forEach( function([key,value]) {
        let cell=tr.append("td");
        cell.text(value);
     }); 
     
});

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("hello3")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Get the value property of the input element
  console.log(dateInput.property("value"));
  console.log(cityInput.property("value"));
  console.log(stateInput.property("value"));
  console.log(countryInput.property("value"));
  console.log(shapeInput.property("value"));

  //create a variable which filters the table if a user enters only some information in so that it will still work

 var filtered = tableData.filter(et_sighting =>{
  return (et_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (et_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (et_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (et_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (et_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 //run the filtered entries through the displayData function to update the table
 displayData(filtered);


});

var filterInputs = d3.selectAll('.form-control');

// Clears input fields and input object
function clearEntries() {
    filters = {};

    // Sets every input field to empty
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Keeps page from refreshing completely, only want the table to refresh
    d3.event.preventDefault();
    // Clears input fields
    clearEntries()
});