// from data.js
var tableData = data;

// Get reference to table body
var tbody = d3.select("tbody");

// Test of console log of the data in data.js
// console.log(data);

// Loop through data and console.log each js object
data.forEach(function(ufo_info) {
    console.log(ufo_info);
});

// Use d3 to append one table row `tr` for each object
data.forEach(function(ufo_info) {
    console.log(ufo_info);
    var row = tbody.append("tr");
});

// Use `Object.entries` to console.log each report value
data.forEach(function(ufo_info) {
    console.log(ufo_info);
    var row = tbody.append("tr");

    Object.entries(ufo_info).forEach(function([key, value]) {
        console.log(key, value);
    });
});

// Use d3 to append 1 cell per report value (weekday, date, high, low)
data.forEach(function(ufo_info) {
    console.log(ufo_info);
    var row = tbody.append("tr");

    Object.entries(ufo_info).forEach(function([key, value]) {
        console.log(key, value);
//  Append a cell to the row for each value
        var cell = row.append("td");
    });
});

// Use d3 to update each cell's text with report values (datetime, city, state, country, shape, comment)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });