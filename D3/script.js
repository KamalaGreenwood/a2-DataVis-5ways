const canvas = d3.select("#main").append("svg").attr("height",1000).attr("width",1000);

//this is the background canvas
canvas.append('rect')
    .attr("height",500)
    .attr("width",900)
    .attr("fill", '#eeeaea');

    //this is going to be the gray smaller bg
canvas.append('rect')
    .attr("height",435)
    .attr("width",700)
    .attr("fill", '#989696')
    .attr("x", 75)
    .attr("y", 10);

//here I am loading the data
d3.csv("../penglings.csv", function(data){
    console.log(data); //checking data exists :)

    //add x-axis
    var x = d3.scaleLinear()
    .domain([170,235])
    .range([0,700])

    canvas.append()
    .attr("transform", "translate(0," + 100 + ")")
    .call(d3.axisBottom(x).tickSize(1).ticks(10))

    // Add X axis label:
    canvas.append("text")
      .attr("text-anchor", "end")
      .attr("x", 700/2)
      .attr("y", 435 + 20)
      .text("x-axis");

});
