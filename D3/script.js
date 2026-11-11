//setting the margins in a way that is more progomatic than changing individual values
var margin = {top: 10, right: 130, bottom: 60, left: 60},
    width = 870 - margin.left - margin.right,
    height = 560 - margin.top - margin.bottom;

const canvas = d3.select("#main")
        .append("svg").attr("height",(height + margin.top + margin.bottom))
                        .attr("width",(width + margin.left + margin.right))

//this is the background canvas
canvas.append('rect')
    .attr("height", (height + margin.top + margin.bottom))
    .attr("width", (width + margin.left + margin.right))
    .attr("fill", '#f5f5f5');

    //this is going to be the gray smaller bg
canvas.append('rect')
    .attr("height", height)
    .attr("width", width)
    .attr("fill", '#dedede')
    .attr("x", margin.left)
    .attr("y", margin.top);

//here I am loading the data
d3.csv("../penglings.csv", function(data){
    console.log(data); //checking data exists :)

    //add x-axis
    var x = d3.scaleLinear()
    .domain([170,235])
    .range([0,width])

    canvas.append()
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(5))

    // Add X axis label:
    canvas.append("text")
      .attr("text-anchor", "end")
      .attr("x", margin.left + width/2 + 50)
      .attr("y", height + margin.top + margin.bottom/2)
      .text("Flipper Length (mm)"); 
});
