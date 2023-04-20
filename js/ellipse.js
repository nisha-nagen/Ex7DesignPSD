(function (d3) {
var π = Math.PI,
    τ = 2 * π,
    n = 500;

var width = 380,
    height = 380,
    outerRadius = width / 2 - 20,
    innerRadius = outerRadius - 20;

const svg = d3.select('svg');
const width1 = +svg.attr('width');
const height1 = +svg.attr('height');
const g = svg.append('g')
    .attr("transform", "translate(" + width / 2 + "," + 200	 + ")")

const circle = g.append('circle');
circle.attr('r', (height/2) - 40)
    .attr('fill','#333')
    .append("text")
    .attr("dx", function(d){return -20})
    .text(function(d){return "380 X 380px"})

d3.select("svg")
.append("g")
.attr("transform", "translate(" + width / 2 + "," + 200	 + ")")
.attr("class", "svg-component")
.selectAll("path")
.data(d3.range(0, τ, τ / n))
.enter()
.append("path")
.attr("class", "arc")
.attr("d", d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .startAngle(function(d) { return d; })
        .endAngle(function(d) { return d + τ / n * 1.1; }))
}(d3));


