// from data.js
var tableData = data;

// Get reference to table body
var tbody = d3.select("tbody");

// COMMENTED OUT SECTION BELOW REPRESENTS PROGRESSIVE TESTING OF CODE. SCROLL DOWN TO ROW 44 FOR NEXT SECTION OF CODE DEPLOYED.
// NOTE THAT CLASS EXERCISE 14.3 WAS USED AS EXAMPLE TO BUILD MY CODE OFF OF.

// Test of console log of the data in data.js
// console.log(data);

// Loop through data and console.log each js object
// data.forEach(function(ufo_info) {
    // console.log(ufo_info);
// });

// Use d3 to append one table row `tr` for each object
// data.forEach(function(ufo_info) {
    // console.log(ufo_info);
    // var row = tbody.append("tr");
// });

// Use `Object.entries` to console.log each report value
// data.forEach(function(ufo_info) {
    // console.log(ufo_info);
    // var row = tbody.append("tr");

    // Object.entries(ufo_info).forEach(function([key, value]) {
        // console.log(key, value);
    // });
// });

// Use d3 to append 1 cell per report value (datetime, city, state, country, shape, comment)
// data.forEach(function(ufo_info) {
    // console.log(ufo_info);
    // var row = tbody.append("tr");

    // Object.entries(ufo_info).forEach(function([key, value]) {
        // console.log(key, value);
//  Append a cell to the row for each value
        // var cell = row.append("td");
    // });
// });

// Use d3 to update each cell's text with report values (datetime, city, state, country, shape, comment)
data.forEach(function(ufo_info) {
    console.log(ufo_info);
    var row = tbody.append("tr");

    Object.entries(ufo_info).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the report object
        var cell = row.append("td");
        cell.text(value);
    });
});

// Date entry and table reorg based on date provided
// Variable for date inputted by user
var date_entry = d3.select("#datetime");
var button = d3.select("#filter-btn");
    // console.log(d3.event.target);

// Event handler for click/enter
button.on("click", runEnter);
date_entry.on("click", runEnter);

// Set up fuction to run event
function runEnter() {
    d3.event.preventDefault();
    console.log(date_entry);
    var date_table = tableData.map(ufo_info => ufo_info.datetime === date_entry);
    date_table.forEach(function(ufo_info_rev) {
        console.log(ufo_info_rev);
        var row = tbody.append("tr");
    
        Object.entries(ufo_info_rev).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value in the report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Event listener
date_entry.on("change", runEnter);