window.onload = start;

function start() {
    var width = 500;
    var height = 500;
    var radius = Math.min(width, height) / 2;
    // var margin = 40;

    var graph1 = document.getElementById('graph1');
    var graph2 = document.getElementById('graph2');

    var svg1 = d3.select(graph1)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append("g")
        .attr("transform", "translate(" + width/2 + "," + height/2 +")");

    var svg2 = d3.select(graph2)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append("g")
        .attr("transform", "translate(" + width/2 + "," + height/2 +")");

    d3.csv("colleges.csv", function(data) {
        var collegeMap1 = {};
        var collegeMap2 = {};
        var newCollege1 = "Abilene Christian University";
        var newCollege2 = "Abilene Christian University";

    var colors = {"White": "#94D1FF",
                "Black": "#6266CC",
                "Hispanic": "#1C2199",
                "Asian": "#CC6266",
                "American Indian": "#FFE8D4",
                "Pacific Islander": "#CC8462",
                "Biracial": "#95CCB7"};

        data.forEach(function(d) {
            var college1 = d.Name;
            var college2 = d.Name;

            collegeMap1[college1] = [];
            collegeMap1[college1].push(college1);
            collegeMap2[college2] = [];
            collegeMap2[college2].push(college2);

            collegeMap1[college1].white = +d["% White"];
            collegeMap1[college1].black = +d["% Black"];
            collegeMap1[college1].hispanic = +d["% Hispanic"];
            collegeMap1[college1].asian = +d["% Asian"];
            collegeMap1[college1].indian = +d["% American Indian"];
            collegeMap1[college1].pacific = +d["% Pacific Islander"];
            collegeMap1[college1].biracial = +d["% Biracial"];

            collegeMap1[college1].control = d["Control"];
            collegeMap1[college1].region = d["Region"];
            collegeMap1[college1].admission = Math.floor(+d["Admission Rate"] * 100) + "%";
            collegeMap1[college1].retention = Math.floor(+d["Retention Rate (First Time Students)"] * 100) + "%";


            collegeMap2[college2].white = +d["% White"];
            collegeMap2[college2].black = +d["% Black"];
            collegeMap2[college2].hispanic = +d["% Hispanic"];
            collegeMap2[college2].asian = +d["% Asian"];
            collegeMap2[college2].indian = +d["% American Indian"];
            collegeMap2[college2].pacific = +d["% Pacific Islander"];
            collegeMap2[college2].biracial = +d["% Biracial"];

            collegeMap2[college2].control = d["Control"];
            collegeMap2[college2].region = d["Region"];
            collegeMap2[college2].admission = Math.floor(+d["Admission Rate"] * 100) + "%";
            collegeMap2[college2].retention = Math.floor(+d["Retention Rate (First Time Students)"] * 100) + "%";
        })


        var colleges1 = Object.keys(collegeMap1);
        var colleges2 = Object.keys(collegeMap2);

        var college1Races = [{"Race": "White", "Percent": collegeMap1[newCollege1].white},
                {"Race": "Black", "Percent": collegeMap1[newCollege1].black},
                {"Race": "Hispanic", "Percent": collegeMap1[newCollege1].hispanic},
                {"Race": "Asian", "Percent": collegeMap1[newCollege1].asian},
                {"Race": "American Indian", "Percent": collegeMap1[newCollege1].indian},
                {"Race": "Pacific Islander", "Percent": collegeMap1[newCollege1].pacific},
                {"Race": "Biracial", "Percent": collegeMap1[newCollege1].biracial}];

            var pie = d3.pie()
                .value(function(d) { return d.Percent; })
                (college1Races);

            var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var g = svg1.selectAll("arc")
                .data(pie)
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d) { return colors[d.data["Race"]];
            });

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ College 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        function changeCollege1() {
            newCollege1 = d3.select('#select1').property('value');
            var college1Races = [{"Race": "White", "Percent": collegeMap1[newCollege1].white},
                {"Race": "Black", "Percent": collegeMap1[newCollege1].black},
                {"Race": "Hispanic", "Percent": collegeMap1[newCollege1].hispanic},
                {"Race": "Asian", "Percent": collegeMap1[newCollege1].asian},
                {"Race": "American Indian", "Percent": collegeMap1[newCollege1].indian},
                {"Race": "Pacific Islander", "Percent": collegeMap1[newCollege1].pacific},
                {"Race": "Biracial", "Percent": collegeMap1[newCollege1].biracial}];

            d3.select("#control1").text(collegeMap1[newCollege1].control);
            d3.select("#region1").text(collegeMap1[newCollege1].region);
            d3.select("#admitrate1").text(collegeMap1[newCollege1].admission);
            d3.select("#retention1").text(collegeMap1[newCollege1].retention);
        }

        var selection1 = d3.select('#graph1')
            .append('p')
            .append('text')
            .text('Choose a College: ')
            .append('select')
            .attr('id', 'select1')
            .on('change', function() {
            // .on('click', function() {
                changeCollege1();
                var college1Races = [{"Race": "White", "Percent": collegeMap1[newCollege1].white},
                    {"Race": "Black", "Percent": collegeMap1[newCollege1].black},
                    {"Race": "Hispanic", "Percent": collegeMap1[newCollege1].hispanic},
                    {"Race": "Asian", "Percent": collegeMap1[newCollege1].asian},
                    {"Race": "American Indian", "Percent": collegeMap1[newCollege1].indian},
                    {"Race": "Pacific Islander", "Percent": collegeMap1[newCollege1].pacific},
                    {"Race": "Biracial", "Percent": collegeMap1[newCollege1].biracial}];
                var pie = d3.pie()
                    .value(function(d) { return d.Percent; })
                    (college1Races);

                var arc = d3.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(0);

                var g = svg1.selectAll("arc")
                    .data(pie)
                    .enter().append("g")
                    .attr("class", "arc");

                g.append("path")
                    .attr("d", arc)
                    .style("fill", function(d) { return colors[d.data["Race"]];
                });
            });

        var selectCollege1 = selection1.selectAll('option')
            .data(colleges1)
            .enter()
            .append('option')
            .text(function(d) {
                return d;
            });

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ College 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        var college2Races = [{"Race": "White", "Percent": collegeMap2[newCollege2].white},
            {"Race": "Black", "Percent": collegeMap2[newCollege2].black},
            {"Race": "Hispanic", "Percent": collegeMap2[newCollege2].hispanic},
            {"Race": "Asian", "Percent": collegeMap2[newCollege2].asian},
            {"Race": "American Indian", "Percent": collegeMap2[newCollege2].indian},
            {"Race": "Pacific Islander", "Percent": collegeMap2[newCollege2].pacific},
            {"Race": "Biracial", "Percent": collegeMap2[newCollege2].biracial}];

        var pie = d3.pie()
            .value(function(d) { return d.Percent; })
            (college2Races);

        var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        var g = svg2.selectAll("arc")
            .data(pie)
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function(d) {return colors[d.data["Race"]];
        });

        function changeCollege2() {
            newCollege2 = d3.select('#select2').property('value');
            var college2Races = [{"Race": "White", "Percent": collegeMap2[newCollege2].white},
                {"Race": "Black", "Percent": collegeMap2[newCollege2].black},
                {"Race": "Hispanic", "Percent": collegeMap2[newCollege2].hispanic},
                {"Race": "Asian", "Percent": collegeMap2[newCollege2].asian},
                {"Race": "American Indian", "Percent": collegeMap2[newCollege2].indian},
                {"Race": "Pacific Islander", "Percent": collegeMap2[newCollege2].pacific},
                {"Race": "Biracial", "Percent": collegeMap2[newCollege2].biracial}];


            d3.select("#control2").text(collegeMap2[newCollege2].control);
            d3.select("#region2").text(collegeMap2[newCollege2].region);
            d3.select("#admitrate2").text(collegeMap2[newCollege2].admission);
            d3.select("#retention2").text(collegeMap2[newCollege2].retention);
        }

        var selection2 = d3.select('#graph2')
            .append('p')
            .append('text')
            .text('Choose a College: ')
            .append('select')
            .attr('id', 'select2')
            .on('change', function() {
            // .on('click', function() {
                changeCollege2();
                var college2Races = [{"Race": "White", "Percent": collegeMap2[newCollege2].white},
                    {"Race": "Black", "Percent": collegeMap2[newCollege2].black},
                    {"Race": "Hispanic", "Percent": collegeMap2[newCollege2].hispanic},
                    {"Race": "Asian", "Percent": collegeMap2[newCollege2].asian},
                    {"Race": "American Indian", "Percent": collegeMap2[newCollege2].indian},
                    {"Race": "Pacific Islander", "Percent": collegeMap2[newCollege2].pacific},
                    {"Race": "Biracial", "Percent": collegeMap2[newCollege2].biracial}];

                var pie = d3.pie()
                    .value(function(d) { return d.Percent; })
                    (college2Races);

                var arc = d3.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(0);

                var g = svg2.selectAll("arc")
                    .data(pie)
                    .enter().append("g")
                    .attr("class", "arc");

                g.append("path")
                    .attr("d", arc)
                    .style("fill", function(d) {return colors[d.data["Race"]];
                });
            });

        var selectCollege2 = selection2.selectAll('option')
            .data(colleges2)
            .enter()
            .append('option')
            .text(function(d) {
                return d;
            });
        })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~General Facts~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~








}
