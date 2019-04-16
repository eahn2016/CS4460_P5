// var width =500;
// var height= 500;

d3.csv("colleges.csv", function(csv) {
    for (var i = 0; i < csv.length; ++i) {

    }
 //    for (var i=0; i<csv.length; ++i) {
	// 	csv[i].GPA = Number(csv[i].GPA);
	// 	csv[i].SATM = Number(csv[i].SATM);
	// 	csv[i].SATV = Number(csv[i].SATV);
	// 	csv[i].ACT = Number(csv[i].ACT);
 //    }
 //    var satmExtent = d3.extent(csv, function(row) { return row.SATM; });
 //    var satvExtent = d3.extent(csv, function(row) { return row.SATV; });
 //    var actExtent = d3.extent(csv,  function(row) { return row.ACT;  });
 //    var gpaExtent = d3.extent(csv,  function(row) { return row.GPA;   });


 //    var satExtents = {
	// "SATM": satmExtent,
	// "SATV": satvExtent
 //    };


 //    // Axis setup
 //    var xScale = d3.scaleLinear().domain(satmExtent).range([50, 470]);
 //    var yScale = d3.scaleLinear().domain(satvExtent).range([470, 30]);

 //    var xScale2 = d3.scaleLinear().domain(actExtent).range([50, 470]);
 //    var yScale2 = d3.scaleLinear().domain(gpaExtent).range([470, 30]);

 //    var xAxis = d3.axisBottom().scale(xScale);
 //    var yAxis = d3.axisLeft().scale(yScale);

 //    var xAxis2 = d3.axisBottom().scale(xScale2);
 //    var yAxis2 = d3.axisLeft().scale(yScale2);

 //    //Create SVGs for charts
 //    var chart1 = d3.select("#chart1")
	//                 .append("svg:svg")
	//                 .attr("width",width)
	//                 .attr("height",height);


 //    var chart2 = d3.select("#chart2")
	//                 .append("svg:svg")
	//                 .attr("width",width)
	//                 .attr("height",height);

 //    var brushSAT = d3.brush()
 //      .on("start", brushstartSAT)
 //      .on("brush", brushmoveSAT)
 //      .on("end", brushendSAT)
 //      .extent([[0,0],[width,height]]);

 //    var brushACT = d3.brush()
 //      .on("start", brushstartACT)
 //      .on("brush", brushmoveACT)
 //      .on("end", brushendACT)
 //      .extent([[0,0],[width,height]]);

 //    chart1.append("g")
 //        .attr("class", "brush")
 //        .call(brushSAT);

 //    chart2.append("g")
 //        .attr("class", "brush")
 //        .call(brushACT);

 //    brushcontainerSAT = chart1.append('g')
 //        .attr("class", "brush")
 //        .call(brushSAT);

 //    brushcontainerACT = chart2.append('g')
 //        .attr("class", "brush")
 //        .call(brushACT);

 //    function brushstartSAT() {
 //        brushACT.move(brushcontainerACT, null);
 //    }

 //    function brushmoveSAT() {
 //        let sel = d3.event.selection;
 //        if (!sel) {
 //            return;
 //        }

 //        let [[left, top], [right, bottom]] = sel;

 //        chart1.selectAll('circle')
 //            .classed('unselected', function(d) {
 //                let cx = xScale(d['SATM']);
 //                let cy = yScale(d['SATV']);
 //                return left <= cx && cx <= right && top <= cy && cy <= bottom;
 //            });

 //        brushed = chart1.selectAll('circle.unselected').data();

 //        chart2.selectAll('circle')
 //            .classed('selected2', function(d) {
 //                return brushed.includes(d);
 //            });
 //        }

 //    function brushendSAT() {
 //        let sel = d3.event.selection;
 //        if (!sel) {
 //            chart2.selectAll('circle')
 //                .classed('selected2', false);
 //        }
 //    }

 //    function brushstartACT() {
 //        brushSAT.move(brushcontainerSAT, null);
 //    }

 //    function brushmoveACT() {
 //        let sel = d3.event.selection;
 //        if (!sel) {
 //            return;
 //        }

 //        let [[left, top], [right, bottom]] = sel;

 //        chart2.selectAll('circle')
 //            .classed('unselected', function(d) {
 //                let cx = xScale2(d['ACT']);
 //                let cy = yScale2(d['GPA']);
 //                return left <= cx && cx <= right && top <= cy && cy <= bottom;
 //            });

 //        brushed = chart2.selectAll('circle.unselected').data();

 //        chart1.selectAll('circle')
 //            .classed('selected', function(d) {
 //                return brushed.includes(d);
 //            });
 //    }

 //    function brushendACT() {
 //        let sel = d3.event.selection;
 //        if (!sel) {
 //            chart1.selectAll('circle')
 //                .classed('selected', false);
 //        }
 //    }

 //    function circleChart1(currCircle) {
 //        chart2.selectAll('circle').classed('selected2', function(d) {
 //            if (d == currCircle) {
 //                document.getElementById("satm").innerHTML = String(currCircle.SATM);
 //                document.getElementById("satv").innerHTML = String(currCircle.SATV);
 //                document.getElementById("act").innerHTML = String(currCircle.ACT);
 //                document.getElementById("gpa").innerHTML = String(currCircle.GPA);
 //                return true;
 //            }
 //        });

 //        chart1.selectAll('circle').classed('selected', false)
 //    }

 //    function circleChart2(currCircle) {
 //        chart1.selectAll('circle').classed('selected', function(d) {
 //            if (d == currCircle) {
 //                document.getElementById("satm").innerHTML = String(currCircle.SATM);
 //                document.getElementById("satv").innerHTML = String(currCircle.SATV);
 //                document.getElementById("act").innerHTML = String(currCircle.ACT);
 //                document.getElementById("gpa").innerHTML = String(currCircle.GPA);
 //                return true;
 //            }
 //        });

 //        chart2.selectAll('circle').classed('selected2', false)
 //    }

	//  //add scatterplot points
 //     var temp1 = chart1.selectAll("circle")
	//    .data(csv)
	//    .enter()
	//    .append("circle")
	//    .attr("id",function(d,i) {return i;} )
	//    .attr("stroke", "black")
	//    .attr("cx", function(d) { return xScale(d.SATM); })
	//    .attr("cy", function(d) { return yScale(d.SATV); })
	//    .attr("r", 5)
	//    .on("click", function(d,i){
 //            circleChart1(d);
 //       });

 //    var temp2 = chart2.selectAll("circle")
	//    .data(csv)
	//    .enter()
	//    .append("circle")
	//    .attr("id",function(d,i) {return i;} )
	//    .attr("stroke", "black")
	//    .attr("cx", function(d) { return xScale2(d.ACT); })
	//    .attr("cy", function(d) { return yScale2(d.GPA); })
	//    .attr("r", 5)
	//    .on("click", function(d,i){
 //            circleChart2(d);
 //       });



 //    chart1 // or something else that selects the SVG element in your visualizations
	// 	.append("g") // create a group node
	// 	.attr("transform", "translate(0,"+ (width -30)+ ")")
	// 	.call(xAxis) // call the axis generator
	// 	.append("text")
	// 	.attr("class", "label")
	// 	.attr("x", width-16)
	// 	.attr("y", -6)
	// 	.style("text-anchor", "end")
	// 	.text("SATM");

 //    chart1 // or something else that selects the SVG element in your visualizations
	// 	.append("g") // create a group node
	// 	.attr("transform", "translate(50, 0)")
	// 	.call(yAxis)
	// 	.append("text")
	// 	.attr("class", "label")
	// 	.attr("transform", "rotate(-90)")
	// 	.attr("y", 6)
	// 	.attr("dy", ".71em")
	// 	.style("text-anchor", "end")
	// 	.text("SATV");

 //    chart2 // or something else that selects the SVG element in your visualizations
	// 	.append("g") // create a group node
	// 	.attr("transform", "translate(0,"+ (width -30)+ ")")
	// 	.call(xAxis2)
	// 	.append("text")
	// 	.attr("class", "label")
	// 	.attr("x", width-16)
	// 	.attr("y", -6)
	// 	.style("text-anchor", "end")
	// 	.text("ACT");

 //    chart2 // or something else that selects the SVG element in your visualizations
	// 	.append("g") // create a group node
	// 	.attr("transform", "translate(50, 0)")
	// 	.call(yAxis2)
	// 	.append("text")
	// 	.attr("class", "label")
	// 	.attr("transform", "rotate(-90)")
	// 	.attr("y", 6)
	// 	.attr("dy", ".71em")
	// 	.style("text-anchor", "end")
	// 	.text("GPA");
	});
