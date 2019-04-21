var width = 500;
var height = 500;

var graph1 = document.getElementById('graph1');
var graph2 = document.getElementById('graph2');

var svg1 = d3.select(graph1)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

var svg2 = d3.select(graph2)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

d3.csv("colleges.csv", function(data) {
    var collegeMap = {};

    data.forEach(function(d) {
        var college = d.Name;
        collegeMap[college] = [];
        collegeMap[college].push(college);

        collegeMap[college].white = +d["% White"];

    })

    var colleges = Object.keys(collegeMap).sort();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ College 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    var changeCollege1 = function() {
        var newCollege1 = d3.select('#select1').property('value');
        var white1 = collegeMap[newCollege1].white;
    }
    var selection1 = d3.select('#graph1')
        .append('p')
        .append('text')
        .text('Choose a College: ')
        .append('select')
        .attr('id', 'select1')
        .on('change', changeCollege1);

    var selectCollege1 = selection1.selectAll('option')
        .data(colleges)
        .enter()
        .append('option')
        .text(function(d) {
            return d;
        })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ College 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    var changeCollege2 = function() {
        var newCollege2 = d3.select('#select2').property('value');
        // var region2 = newCollege2["Region"];
        // console.log(newCollege2.region);
    }
    var selection2 = d3.select('#graph2')
        .append('p')
        .append('text')
        .text('Choose a College: ')
        .append('select')
        .attr('id', 'select2')
        .on('change', changeCollege2);

    var selectCollege2 = selection2.selectAll('option')
        .data(colleges)
        .enter()
        .append('option')
        .text(function(d) {
            return d;
        })

	});
