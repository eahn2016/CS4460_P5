var width = 500;
var height = 500;

var graph = document.getElementById('graph');

var svg = d3.select(graph)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

d3.csv("colleges.csv", function(data) {
    var collegeMap = {};
    data.forEach(function(d) {
        var college = d.Name;
        collegeMap[college] = [];
        collegeMap[college].push(college);
    })

    var colleges = Object.keys(collegeMap).sort();

    var changeCollege = function() {
        var newCollege = d3.select('select').property('value');
    }
    var selection = d3.select('#graph')
        .append('p')
        .append('text')
        .text('Choose a College: ')
        .append('select')
        .attr('class', 'select')
        .on('change', changeCollege);

    var selectCollege = selection.selectAll('option')
        .data(colleges)
        .enter()
        .append('option')
        .text(function(d) {
            return d;
        })
	});
