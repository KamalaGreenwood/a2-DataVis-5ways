//setting the margins in a way that is more progomatic than changing individual values
var margin = {top: 10, right: 130, bottom: 60, left: 60},
    width = 870 - margin.left - margin.right,
    height = 560 - margin.top - margin.bottom;

const svg = d3.select("#main")
        .append("svg").attr("height",(height + margin.top + margin.bottom))
                        .attr("width",(width + margin.left + margin.right))
        .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//this is the background canvas
svg.append('rect')
    .attr("height", (height + margin.top + margin.bottom))
    .attr("width", (width + margin.left + margin.right))
    .attr("fill", '#f5f5f5');

//this is going to be the gray smaller bg
svg.append('rect')
    .attr("height", height)
    .attr("width", width)
    .attr("fill", '#dedede')
    .attr("x", margin.left)
    .attr("y", margin.top);

//here I am loading the data
d3.csv("data.csv", d => {
  if (!d.year || !d.value) return null;  // skip rows with empty fields
  return { year: +d.year, value: +d.value };
}).then(data => {
    console.log(data); //checking data exists :)

// Add X axis
  var x = d3.scaleLinear()
    .domain([170, 235])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + (height + 10) + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([1500, 7000])
    .range([ height + margin.top, margin.top]);
  svg.append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(d3.axisLeft(y));

  // Add a scale for bubble size
  var z = d3.scaleLinear()
    .domain([1, 100])
    .range([ 1, 200]);

  // Add a scale for bubble color
  var myColor = d3.scaleOrdinal()
    .domain(["Adelie", "Chinstrap", "Gentoo"])
    .range(["#dbb20c", "#871dea", "#238fe2"]);

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.flipper_length_mm); } )
      .attr("cy", function (d) { return y(d.body_mass_g); } )
      .attr("r", function (d) { return z(d.bill_length_mm); } )
      .style("fill", function (d) { return myColor(d.species); } )
      .style("opacity", "0.8")
      .attr("stroke", "black")
      .style("stroke-width", "2px")
});
