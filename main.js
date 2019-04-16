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

    // var dropdown = d3.select('graph')
    //     .insert('select', 'svg')
    //     .on('change', onChange);

    var changeCollege = function() {
        var newCollege = d3.select('select').property('value');
        // return newCollege;
    }
    var selection = d3.select('body')
        .append('p')
        .append('text')
        .text('Choose a College: ')
        .append('select')
        .attr('class', 'select')
        .on('change', changeCollege);

    var selectCollege = selection.selectAll('option')
        .data(colleges)
        // .attr('class', 'select')
        // .attr('id', 'selectedCollege')
        .enter()
        .append('option')
        .text(function(d) {
            return d;
        })
        // .attr("value", function (d) {
        //     return d;
        // });

    console.log(colleges);


	});
