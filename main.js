var widthf = 1000;
var heightf = widthf * 0.6;
var dimratio = widthf / 1000;

var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementById("svghere");

var wratio = ((w.innerWidth || e.clientWidth || g.clientWidth) * 0.9) / 1000;

var colors = {
  1: "#1A237E",
  2: "#01579B",
  3: "#006064",
  4: "#004D40",
  5: "#00695C",
  6: "#00796B",
  7: "#1B5E20",
  8: "#2E7D32",
  9: "#388E3C",
  1019021840: "#33691E",
  10: "#558B2F",
  11: "#689F38",
  12: "#AFB42B",
  13: "#C0CA33",
  14: "#CDDC39",
  15: "#D4E157",
  16: "#FFEE58",
  17: "#FFEB3B",
  18: "#FDD835",
  19: "#FBC02D",
  20: "#F57F17",
  21: "#FF6F00",
  22: "#F57C00",
  23: "#FF9800",
  24: "#FFB74D",
  25: "#FF8A65",
  26: "#FF7043",
  27: "#FF5722",
  28: "#E64A19",
  29: "#D84315",
  30: "#BF360C"
};

var width = 1000 * dimratio;
var height = 570 * dimratio;

var svg = d3.select("svg");

d3.select(".pagetitle")
  .attr("x", 870)
  .attr("y", 410)
  .attr("text-anchor", "middle");
d3.select(".amount")
  .attr("x", 870)
  .attr("y", 435)
  .attr("text-anchor", "middle");
d3.select(".total")
  .attr("x", 870)
  .attr("y", 447)
  .attr("text-anchor", "middle");

d3.select(".tooltip")
  .style("border-radius", d3.round(2 * wratio) + "px")
  .style("padding", d3.round(2 * wratio) + "px");
d3.select(".tooltip2")
  .style("font-size", d3.round(12 * wratio) + "pt")
  .style("margin", d3.round(4 * wratio) + "px");
d3.select(".tooltip3")
  .style("font-size", d3.round(10 * wratio) + "pt")
  .style("margin", d3.round(4 * wratio) + "px");
d3.select(".tooltip4")
  .style("font-size", d3.round(10 * wratio) + "pt")
  .style("margin", d3.round(4 * wratio) + "px");

var projection = d3.geo
  .miller()
  .scale(820 * dimratio) //140
  .translate([width / 2 + 60 * dimratio, height / 2 + 80 * dimratio])
  .center([70.6, 15.9])
  .precision(0.1);

d3.json("globalfuck.html", function(polygon) {
  d3.json("globalfuckliteracy.html", function(polygon2) {
    d3.json("geedeepee.html", function(polygon3) {
      d3.json("population.html", function(polygon4) {
        d3.json("perca.html", function(polygon5) {
          d3.json("hdi.html", function(polygon6) {
            d3.json("meda.html", function(polygon7) {
              d3.json("riots.html", function(polygon8) {
                d3.json("forests.html", function(polygon9) {
                  d3.json("vehicles.html", function(polygon10) {
                    d3.json("alc.html", function(polygon11) {
                      d3.json("porn.html", function(polygon12) {
                        d3.json("obesity.html", function(polygon13) {
                          d3.json("iit.html", function(polygon14) {
                            var path = svg.append("path");
                            var path1 = svg.append("path");

                            var countries = polygon.features.length;
                            alignfeatureorder(polygon, polygon2);
                            alignfeatureorder(polygon3, polygon4);
                            alignfeatureorder(polygon5, polygon6);
                            alignfeatureorder(polygon7, polygon8);
                            alignfeatureorder(polygon9, polygon10);
                            alignfeatureorder(polygon11, polygon12);
                            alignfeatureorder(polygon13, polygon14);

                            var k = -1;

                            var line1 = [];
                            var line2 = [];
                            var line3 = [];
                            var line4 = [];
                            var line5 = [];
                            var line6 = [];
                            var line7 = [];
                            var line8 = [];
                            var line9 = [];
                            var line10 = [];
                            var line11 = [];
                            var line12 = [];
                            var line13 = [];
                            var line14 = [];

                            var avgpoints = 0;

                            var mostpoints;
                            var rotation;
                            while (k++ < countries - 1) {
                              line1 = polygon.features[k].geometry.coordinates[0];
                              line2 = polygon2.features[k].geometry.coordinates[0];
                              line3 = polygon3.features[k].geometry.coordinates[0];
                              line4 = polygon4.features[k].geometry.coordinates[0];
                              line5 = polygon5.features[k].geometry.coordinates[0];
                              line6 = polygon6.features[k].geometry.coordinates[0];
                              line7 = polygon7.features[k].geometry.coordinates[0];
                              line8 = polygon8.features[k].geometry.coordinates[0];
                              line9 = polygon9.features[k].geometry.coordinates[0];
                              line10 = polygon10.features[k].geometry.coordinates[0];
                              line11 = polygon11.features[k].geometry.coordinates[0];
                              line12 = polygon12.features[k].geometry.coordinates[0];
                              line13 = polygon13.features[k].geometry.coordinates[0];
                              line14 = polygon14.features[k].geometry.coordinates[0];

                              mostpoints = Math.max(
                                line1.length,
                                line2.length,
                                line3.length,
                                line4.length,
                                line5.length,
                                line6.length,
                                line7.length,
                                line8.length,
                                line9.length,
                                line10.length,
                                line11.length,
                                line12.length,
                                line13.length,
                                line14.length
                              );

                              if (line1.length == mostpoints) {
                                line2 = addpts(line2, 0, line2.length, line1.length);
                                line3 = addpts(line3, 0, line3.length, line1.length);
                                line4 = addpts(line4, 0, line4.length, line1.length);
                                line5 = addpts(line5, 0, line5.length, line1.length);
                                line6 = addpts(line6, 0, line6.length, line1.length);
                                line7 = addpts(line7, 0, line7.length, line1.length);
                                line8 = addpts(line8, 0, line8.length, line1.length);
                                line9 = addpts(line9, 0, line9.length, line1.length);
                                line10 = addpts(line10, 0, line10.length, line1.length);
                                line11 = addpts(line11, 0, line11.length, line1.length);
                                line12 = addpts(line12, 0, line12.length, line1.length);
                                line13 = addpts(line13, 0, line13.length, line1.length);
                                line14 = addpts(line14, 0, line14.length, line1.length);
                              } else if (line2.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line2.length);
                                line3 = addpts(line3, 0, line3.length, line2.length);
                                line4 = addpts(line4, 0, line4.length, line2.length);
                                line5 = addpts(line5, 0, line5.length, line2.length);
                                line6 = addpts(line6, 0, line6.length, line2.length);
                                line7 = addpts(line7, 0, line7.length, line2.length);
                                line8 = addpts(line8, 0, line8.length, line2.length);
                                line9 = addpts(line9, 0, line9.length, line2.length);
                                line10 = addpts(line10, 0, line10.length, line2.length);
                                line11 = addpts(line11, 0, line11.length, line2.length);
                                line12 = addpts(line12, 0, line12.length, line2.length);
                                line13 = addpts(line13, 0, line13.length, line2.length);
                                line14 = addpts(line14, 0, line14.length, line2.length);
                              } else if (line3.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line3.length);
                                line2 = addpts(line2, 0, line2.length, line3.length);
                                line4 = addpts(line4, 0, line4.length, line3.length);
                                line5 = addpts(line5, 0, line5.length, line3.length);
                                line6 = addpts(line6, 0, line6.length, line3.length);
                                line7 = addpts(line7, 0, line7.length, line3.length);
                                line8 = addpts(line8, 0, line8.length, line3.length);
                                line9 = addpts(line9, 0, line9.length, line3.length);
                                line10 = addpts(line10, 0, line10.length, line3.length);
                                line11 = addpts(line11, 0, line11.length, line3.length);
                                line12 = addpts(line12, 0, line12.length, line3.length);
                                line13 = addpts(line13, 0, line13.length, line3.length);
                                line14 = addpts(line14, 0, line14.length, line3.length);
                              } else if (line4.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line4.length);
                                line2 = addpts(line2, 0, line2.length, line4.length);
                                line3 = addpts(line3, 0, line3.length, line4.length);
                                line5 = addpts(line5, 0, line5.length, line4.length);
                                line6 = addpts(line6, 0, line6.length, line4.length);
                                line7 = addpts(line7, 0, line7.length, line4.length);
                                line8 = addpts(line8, 0, line8.length, line4.length);
                                line9 = addpts(line9, 0, line9.length, line4.length);
                                line10 = addpts(line10, 0, line10.length, line4.length);
                                line11 = addpts(line11, 0, line11.length, line4.length);
                                line12 = addpts(line12, 0, line12.length, line4.length);
                                line13 = addpts(line13, 0, line13.length, line4.length);
                                line14 = addpts(line14, 0, line14.length, line4.length);
                              } else if (line5.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line5.length);
                                line2 = addpts(line2, 0, line2.length, line5.length);
                                line3 = addpts(line3, 0, line3.length, line5.length);
                                line4 = addpts(line4, 0, line4.length, line5.length);
                                line6 = addpts(line6, 0, line6.length, line5.length);
                                line7 = addpts(line7, 0, line7.length, line5.length);
                                line8 = addpts(line8, 0, line8.length, line5.length);
                                line9 = addpts(line9, 0, line9.length, line5.length);
                                line10 = addpts(line10, 0, line10.length, line5.length);
                                line11 = addpts(line11, 0, line11.length, line5.length);
                                line12 = addpts(line12, 0, line12.length, line5.length);
                                line13 = addpts(line13, 0, line13.length, line5.length);
                                line14 = addpts(line14, 0, line14.length, line5.length);
                              } else if (line6.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line6.length);
                                line2 = addpts(line2, 0, line2.length, line6.length);
                                line3 = addpts(line3, 0, line3.length, line6.length);
                                line4 = addpts(line4, 0, line4.length, line6.length);
                                line5 = addpts(line5, 0, line5.length, line6.length);
                                line7 = addpts(line7, 0, line7.length, line6.length);
                                line8 = addpts(line8, 0, line8.length, line6.length);
                                line9 = addpts(line9, 0, line9.length, line6.length);
                                line10 = addpts(line10, 0, line10.length, line6.length);
                                line11 = addpts(line11, 0, line11.length, line6.length);
                                line12 = addpts(line12, 0, line12.length, line6.length);
                                line13 = addpts(line13, 0, line13.length, line6.length);
                                line14 = addpts(line14, 0, line14.length, line6.length);
                              } else if (line7.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line7.length);
                                line2 = addpts(line2, 0, line2.length, line7.length);
                                line3 = addpts(line3, 0, line3.length, line7.length);
                                line4 = addpts(line4, 0, line4.length, line7.length);
                                line5 = addpts(line5, 0, line5.length, line7.length);
                                line6 = addpts(line6, 0, line6.length, line7.length);
                                line8 = addpts(line8, 0, line8.length, line7.length);
                                line9 = addpts(line9, 0, line9.length, line7.length);
                                line10 = addpts(line10, 0, line10.length, line7.length);
                                line11 = addpts(line11, 0, line11.length, line7.length);
                                line12 = addpts(line12, 0, line12.length, line7.length);
                                line13 = addpts(line13, 0, line13.length, line7.length);
                                line14 = addpts(line14, 0, line14.length, line7.length);
                              } else if (line8.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line8.length);
                                line2 = addpts(line2, 0, line2.length, line8.length);
                                line3 = addpts(line3, 0, line3.length, line8.length);
                                line4 = addpts(line4, 0, line4.length, line8.length);
                                line5 = addpts(line5, 0, line5.length, line8.length);
                                line6 = addpts(line6, 0, line6.length, line8.length);
                                line7 = addpts(line7, 0, line7.length, line8.length);
                                line9 = addpts(line9, 0, line9.length, line8.length);
                                line10 = addpts(line10, 0, line10.length, line8.length);
                                line11 = addpts(line11, 0, line11.length, line8.length);
                                line12 = addpts(line12, 0, line12.length, line8.length);
                                line13 = addpts(line13, 0, line13.length, line8.length);
                                line14 = addpts(line14, 0, line14.length, line8.length);
                              } else if (line9.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line9.length);
                                line2 = addpts(line2, 0, line2.length, line9.length);
                                line3 = addpts(line3, 0, line3.length, line9.length);
                                line4 = addpts(line4, 0, line4.length, line9.length);
                                line5 = addpts(line5, 0, line5.length, line9.length);
                                line6 = addpts(line6, 0, line6.length, line9.length);
                                line7 = addpts(line7, 0, line7.length, line9.length);
                                line8 = addpts(line8, 0, line8.length, line9.length);
                                line10 = addpts(line10, 0, line10.length, line9.length);
                                line11 = addpts(line11, 0, line11.length, line9.length);
                                line12 = addpts(line12, 0, line12.length, line9.length);
                                line13 = addpts(line13, 0, line13.length, line9.length);
                                line14 = addpts(line14, 0, line14.length, line9.length);
                              } else if (line10.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line10.length);
                                line2 = addpts(line2, 0, line2.length, line10.length);
                                line3 = addpts(line3, 0, line3.length, line10.length);
                                line4 = addpts(line4, 0, line4.length, line10.length);
                                line5 = addpts(line5, 0, line5.length, line10.length);
                                line6 = addpts(line6, 0, line6.length, line10.length);
                                line7 = addpts(line7, 0, line7.length, line10.length);
                                line8 = addpts(line8, 0, line8.length, line10.length);
                                line9 = addpts(line9, 0, line9.length, line10.length);
                                line11 = addpts(line11, 0, line11.length, line10.length);
                                line12 = addpts(line12, 0, line12.length, line10.length);
                                line13 = addpts(line13, 0, line13.length, line10.length);
                                line14 = addpts(line14, 0, line14.length, line10.length);
                              } else if (line11.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line11.length);
                                line2 = addpts(line2, 0, line2.length, line11.length);
                                line3 = addpts(line3, 0, line3.length, line11.length);
                                line4 = addpts(line4, 0, line4.length, line11.length);
                                line5 = addpts(line5, 0, line5.length, line11.length);
                                line6 = addpts(line6, 0, line6.length, line11.length);
                                line7 = addpts(line7, 0, line7.length, line11.length);
                                line8 = addpts(line8, 0, line8.length, line11.length);
                                line9 = addpts(line9, 0, line9.length, line11.length);
                                line10 = addpts(line10, 0, line10.length, line11.length);
                                line12 = addpts(line12, 0, line12.length, line11.length);
                                line13 = addpts(line13, 0, line13.length, line11.length);
                                line14 = addpts(line14, 0, line14.length, line11.length);
                              } else if (line12.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line12.length);
                                line2 = addpts(line2, 0, line2.length, line12.length);
                                line3 = addpts(line3, 0, line3.length, line12.length);
                                line4 = addpts(line4, 0, line4.length, line12.length);
                                line5 = addpts(line5, 0, line5.length, line12.length);
                                line6 = addpts(line6, 0, line6.length, line12.length);
                                line7 = addpts(line7, 0, line7.length, line12.length);
                                line8 = addpts(line8, 0, line8.length, line12.length);
                                line9 = addpts(line9, 0, line9.length, line12.length);
                                line10 = addpts(line10, 0, line10.length, line12.length);
                                line11 = addpts(line11, 0, line11.length, line12.length);
                                line13 = addpts(line13, 0, line13.length, line12.length);
                                line14 = addpts(line14, 0, line14.length, line12.length);
                              } else if (line13.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line13.length);
                                line2 = addpts(line2, 0, line2.length, line13.length);
                                line3 = addpts(line3, 0, line3.length, line13.length);
                                line4 = addpts(line4, 0, line4.length, line13.length);
                                line5 = addpts(line5, 0, line5.length, line13.length);
                                line6 = addpts(line6, 0, line6.length, line13.length);
                                line7 = addpts(line7, 0, line7.length, line13.length);
                                line8 = addpts(line8, 0, line8.length, line13.length);
                                line9 = addpts(line9, 0, line9.length, line13.length);
                                line10 = addpts(line10, 0, line10.length, line13.length);
                                line11 = addpts(line11, 0, line11.length, line13.length);
                                line12 = addpts(line12, 0, line12.length, line13.length);
                                line14 = addpts(line14, 0, line14.length, line13.length);
                              } else if (line14.length == mostpoints) {
                                line1 = addpts(line1, 0, line1.length, line14.length);
                                line2 = addpts(line2, 0, line2.length, line14.length);
                                line3 = addpts(line3, 0, line3.length, line14.length);
                                line4 = addpts(line4, 0, line4.length, line14.length);
                                line5 = addpts(line5, 0, line5.length, line14.length);
                                line6 = addpts(line6, 0, line6.length, line14.length);
                                line7 = addpts(line7, 0, line7.length, line14.length);
                                line8 = addpts(line8, 0, line8.length, line14.length);
                                line9 = addpts(line9, 0, line9.length, line14.length);
                                line10 = addpts(line10, 0, line10.length, line14.length);
                                line11 = addpts(line11, 0, line11.length, line14.length);
                                line12 = addpts(line12, 0, line12.length, line14.length);
                                line13 = addpts(line13, 0, line13.length, line14.length);
                              }

                              polygon.features[k].geometry.coordinates[0] = line1;
                              polygon2.features[k].geometry.coordinates[0] = line2;
                              polygon3.features[k].geometry.coordinates[0] = line3;
                              polygon4.features[k].geometry.coordinates[0] = line4;
                              polygon5.features[k].geometry.coordinates[0] = line5;
                              polygon6.features[k].geometry.coordinates[0] = line6;
                              polygon7.features[k].geometry.coordinates[0] = line7;
                              polygon8.features[k].geometry.coordinates[0] = line8;
                              polygon9.features[k].geometry.coordinates[0] = line9;
                              polygon10.features[k].geometry.coordinates[0] = line10;
                              polygon11.features[k].geometry.coordinates[0] = line11;
                              polygon12.features[k].geometry.coordinates[0] = line12;
                              polygon13.features[k].geometry.coordinates[0] = line13;
                              polygon14.features[k].geometry.coordinates[0] = line14;

                              rotation = calcrotation(line1, line2);
                              polygon2.features[k].geometry.coordinates[0] = rotatearray(
                                polygon2.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line3);
                              polygon3.features[k].geometry.coordinates[0] = rotatearray(
                                polygon3.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line4);
                              polygon4.features[k].geometry.coordinates[0] = rotatearray(
                                polygon4.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line5);
                              polygon5.features[k].geometry.coordinates[0] = rotatearray(
                                polygon5.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line6);
                              polygon6.features[k].geometry.coordinates[0] = rotatearray(
                                polygon6.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line7);
                              polygon7.features[k].geometry.coordinates[0] = rotatearray(
                                polygon7.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line8);
                              polygon8.features[k].geometry.coordinates[0] = rotatearray(
                                polygon8.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line9);
                              polygon9.features[k].geometry.coordinates[0] = rotatearray(
                                polygon9.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line10);
                              polygon10.features[k].geometry.coordinates[0] = rotatearray(
                                polygon10.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line11);
                              polygon11.features[k].geometry.coordinates[0] = rotatearray(
                                polygon11.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line12);
                              polygon12.features[k].geometry.coordinates[0] = rotatearray(
                                polygon12.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line13);
                              polygon13.features[k].geometry.coordinates[0] = rotatearray(
                                polygon13.features[k].geometry.coordinates[0],
                                -rotation
                              );
                              rotation = calcrotation(line1, line14);
                              polygon14.features[k].geometry.coordinates[0] = rotatearray(
                                polygon14.features[k].geometry.coordinates[0],
                                -rotation
                              );

                              polygon.features[k].geometry.coordinates[0] = polygon.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon2.features[k].geometry.coordinates[0] = polygon2.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon3.features[k].geometry.coordinates[0] = polygon3.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon4.features[k].geometry.coordinates[0] = polygon4.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon5.features[k].geometry.coordinates[0] = polygon5.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon6.features[k].geometry.coordinates[0] = polygon6.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon7.features[k].geometry.coordinates[0] = polygon7.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon8.features[k].geometry.coordinates[0] = polygon8.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon9.features[k].geometry.coordinates[0] = polygon9.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon10.features[k].geometry.coordinates[0] = polygon10.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon11.features[k].geometry.coordinates[0] = polygon11.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon12.features[k].geometry.coordinates[0] = polygon12.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon13.features[k].geometry.coordinates[0] = polygon13.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                              polygon14.features[k].geometry.coordinates[0] = polygon14.features[
                                k
                              ].geometry.coordinates[0].map(projection);
                            }

                            var startpoint = 50;
                            var endpoint = 410;
                            var starty = 400;
                            var startradius = 10;
                            svg
                              .selectAll("circle")
                              .data([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
                              .enter()
                              .append("circle")
                              //.style("fill","lightblue")
                              .attr("class", function(d) {
                                return "circle circle" + d;
                              })
                              .attr("r", startradius * dimratio)
                              .attr("cx", function(d) {
                                if (d < 8) return 50 * dimratio + 60 * (d - 1) * dimratio;
                                if (d >= 8) return 50 * dimratio + 60 * (d - 8) * dimratio;
                              })
                              .attr("cy", function(d) {
                                return starty * dimratio + (d > 7 ? 40 * dimratio : 0);
                              })
                              .on("click", function(d) {
                                mapshift(d);
                              });

                            d3.select(".circle1")
                              .style("fill", "#f55556")
                              .attr("r", 1.2 * startradius * dimratio);

                            var selectedvariable = 1;

                            function mapshift(n) {
                              d3.selectAll(".circle")
                                .transition()
                                .duration(500)
                                .style("fill", "#F2E1AF")
                                .attr("r", startradius * dimratio);

                              d3.select(".circle" + n)
                                .transition()
                                .duration(500)
                                .style("fill", "#f55556")
                                .attr("r", 1.2 * startradius * dimratio);

                              d3.selectAll(".summary").style("opacity", 1);

                              selectedvariable = n;

                              if (n == 1) {
                                normal();
                              }
                              if (n == 2) {
                                literacy();
                              }
                              if (n == 3) {
                                gdp();
                              }
                              if (n == 4) {
                                pop();
                              }
                              if (n == 5) {
                                wealth();
                              }
                              if (n == 6) {
                                hdi();
                              }
                              if (n == 7) {
                                meda();
                              }
                              if (n == 8) {
                                riots();
                              }
                              if (n == 9) {
                                forests();
                              }
                              if (n == 10) {
                                vehicles();
                              }
                              if (n == 11) {
                                alc();
                              }
                              if (n == 12) {
                                porn();
                              }
                              if (n == 13) {
                                obesity();
                              }
                              if (n == 14) {
                                iit();
                              }
                            }

                            var x = d3.scale
                              .ordinal()
                              .domain(["Default", "Literacy", "GDP", "Population", "GDP/Capita", "HDI", "Medals"])
                              .rangePoints([startpoint * dimratio, endpoint * dimratio]);

                            var xAxis = d3.svg
                              .axis()
                              .scale(x)
                              .orient("bottom");

                            svg
                              .append("g")
                              .attr("class", "x axis")
                              .call(xAxis)
                              .attr("transform", "translate(0," + (starty + 8) * dimratio + ")");
                            var xx = d3.scale
                              .ordinal()
                              .domain(["Riots", "Forests", "Vehicles", "Alcohol", "Porn", "Obesity", "IITJEE"])
                              .rangePoints([startpoint * dimratio, endpoint * dimratio]);

                            var xxAxis = d3.svg
                              .axis()
                              .scale(xx)
                              .orient("bottom");

                            svg
                              .append("g")
                              .attr("class", "x axis")
                              .call(xxAxis)
                              .attr("transform", "translate(0," + (starty + 47) * dimratio + ")");

                            var pathn = d3.geo.path().projection(null);

                            var tempmap = svg
                              .selectAll("pathx")
                              .data(polygon.features)
                              .enter()
                              .append("path")
                              .attr("d", pathn)
                              .style("stroke", "black")
                              .style("stroke-width", 0.69)
                              .style("fill", function(d) {
                                return "#F2E1AF";
                              })
                              .attr("class", "country")
                              .on("mousemove", function(d) {
                                mouseover(d.properties);
                              })
                              .on("mouseout", function(d) {
                                mouseout(d.properties.Rank);
                              });

                            normal();

                            function normal() {
                              tempmap
                                .data(polygon.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", "#F2E1AF");

                              d3.select(".pagetitle").text("");
                              d3.selectAll(".summary").style("opacity", 0);
                              $(".linkhere").html("");
                              $(".txtbox").html(
                                'INDECODED is a data visualization project that uses open source data to illustrate India in a more striking manner than textual data. Humans are visual thinkers. Our brains can detect even minor aberrations in familiar images. <a href="https://en.wikipedia.org/wiki/Cartogram">Cartograms</a> present subtle information, usually overlooked by us.<br/> The application may take around 20 seconds to load, so kindly be patient for the interface to load.<br/><em>(NB: The map does not show the Union Territories and Telangana as the data was not available of the said regions in Census 2011.)</em>'
                              );
                            }
                            function literacy() {
                              tempmap
                                .data(polygon2.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("National Average");
                              d3.select(".amount").text("74.04%");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/Indian_states_ranking_by_literacy_rate">Source</a>'
                              );
                              $(".txtbox").html(
                                "Literacy rate is defined as the percentage of population above the age of seven that can read and write with understanding of at least one language. Kerala bags the first place in Literacy with a whopping 94%. The states that lag behind and hence shrink in the cartogram are one in the Centre and the East of India. It will be interesting to notice how the smaller states like Goa and Delhi swell up in performance indexii."
                              );
                            }
                            function gdp() {
                              tempmap
                                .data(polygon3.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("National Total GDP");
                              d3.select(".amount").text("INR 12,547,735 crores");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/List_of_Indian_states_by_GDP">Source</a>'
                              );
                              $(".txtbox").html(
                                "Gross Domestic Product is the monetary value of all the finished goods and services produced within the borders of a region in a specific time period. Maharashtra places itself at the first position, primarily because of Mumbai that itself produces 1/20th of Indian GDP. The southern states swell up while the east shrinks. Intuitively, larger states swell up more than smaller ones because of absolute basis of GDP which will reverse when GDP/Capita is calculated."
                              );
                            }
                            function pop() {
                              tempmap
                                .data(polygon4.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Total Population");
                              d3.select(".amount").text("1.328 billion people");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/List_of_states_and_union_territories_of_India_by_population">Source</a>'
                              );
                              $(".txtbox").html(
                                "India's population is heavily centered around the rivers as seen in this cartogram where the Gangetic Plains swell up because of housing 1/5th of the total Indian population. The relatively sparse north east and the state of Jammu and Kashmir, in contrast, shrinks down."
                              );
                            }
                            function wealth() {
                              tempmap
                                .data(polygon5.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Average GDP Per Capital");
                              d3.select(".amount").text("INR 74,920");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/List_of_Indian_states_by_GDP_per_capita">Source</a>'
                              );
                              $(".txtbox").html(
                                "The economic distribution in our country becomes more apparent on comparing the per capita GDP in which the smaller states seem to overtake the larger ones. Sikkim and Goa manifold their size while Uttar Pradesh shrinks to the size of Assam. "
                              );
                            }
                            function hdi() {
                              tempmap
                                .data(polygon6.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Average HDI Index");
                              d3.select(".amount").text("0.609");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/List_of_Indian_states_and_territories_by_Human_Development_Index">Source</a>'
                              );
                              $(".txtbox").html(
                                "Quoting Wikipedia, The Human Development Index (HDI) is a composite statistic of life expectancy, education, and income per capita indicators, which are used to rank countries into four tiers of human development. The country with the highest HDI is Norway with a value of 0.944. In our context, the best performing state, Kerala bags an HDI index of 0.79. There is a high degree of corelation between this cartogram and the GDP/Capita cartogram."
                              );
                            }
                            function meda() {
                              tempmap
                                .data(polygon7.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Medals won in National Games 2015");
                              d3.select(".amount").text("1334");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/2015_National_Games_of_India">Source</a>'
                              );
                              $(".txtbox").html(
                                "The 35th National Games of India was held in early 2015 in Kerala. There were 33 games played including Aquatics, Shooting, Canoeing, Wushu, Judo and so on. Kerala, Maharashtra and Haryana bagged the first three positions. The North overwhelmingly swells up indicating high participation in the games."
                              );
                            }
                            function riots() {
                              tempmap
                                .data(polygon8.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("National Riot Frequency");
                              d3.select(".amount").text("6.2 riots per 100,000 people");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/Indian_states_and_union_territories_ranked_by_riots_rate">Source</a>'
                              );
                              $(".txtbox").html(
                                "Riots aren't an uncommon event in our democracy. The South and the East have taken up most of the space with West and Center shrinking to a quarter their original sizes."
                              );
                            }
                            function forests() {
                              tempmap
                                .data(polygon9.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("National Forest Coverage");
                              d3.select(".amount").text("21.34%");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/Forest_cover_by_state_in_India">Source</a>'
                              );
                              $(".txtbox").html(
                                "This cartogram has the most distortion amongst any of the other cartograms with the West left almost as a shadow to the mighty North East, boasting 50% of India's forest covers. "
                              );
                            }
                            function vehicles() {
                              tempmap
                                .data(polygon10.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Vehicles per 1000 people");
                              d3.select(".amount").text("133");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/Indian_states_ranked_by_number_of_vehicles">Source</a>'
                              );
                              $(".txtbox").html(
                                "Not very surprisingly, smaller states like Goa and Delhi have the highest vehicles/people ratio, followed by the states in the North and then the south Indian states, which interestingly produce 36% of all motor vehicles in the country."
                              );
                            }
                            function alc() {
                              tempmap
                                .data(polygon11.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Monthly Expenditure on Alcohol");
                              d3.select(".amount").text("INR 20.26");
                              $(".linkhere").html(
                                '<a href="http://blogs.wsj.com/indiarealtime/2015/12/23/which-indian-states-drink-and-smoke-the-most/">Source</a>'
                              );
                              $(".txtbox").html(
                                "Alcohol in the context of this cartogram refers to all kinds of liquor, both country beer and imported varieties of wine and whiskey. This cartogram show how much money does the average person of a region spend on alchohol in 30 days. Gujarat having banned the consumption of liquor sees almost no expenditure while the North and the North East increase to twice their size."
                              );
                            }
                            function porn() {
                              tempmap
                                .data(polygon12.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Session duration on Pornhub");
                              d3.select(".amount").text("7 minutes 10 seconds");
                              $(".linkhere").html('<a href="http://www.pornhub.com/insights/pornhub-india">Source</a>');
                              $(".txtbox").html(
                                "Pornhub.com conducted an interesting analysis of its viewers worldwide and had a special section on India showing the breakdown of viewership statistics during holidays, by state, by the genre of Porn and so on. Of them, the striking one was the amount of time a user spends in every session. This graph seems to be the least distorted, except the North East and the East which have the time durations longer than the average. We leave the interpretation of the data upon the readers."
                              );
                            }
                            function obesity() {
                              tempmap
                                .data(polygon13.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Obesity Percentage");
                              d3.select(".amount").text("15.3%");
                              $(".linkhere").html(
                                '<a href="https://en.wikipedia.org/wiki/Obesity_in_India">Source</a>'
                              );
                              $(".txtbox").html(
                                "Obesity is a rising phenomenon in the country. The central belt of India seems to be literally squeezed by the volumnous north and the south. Also, if you toggle the GDP/Capita cartogram, you shall observe a high corelation with this cartogram."
                              );
                            }
                            function iit() {
                              tempmap
                                .data(polygon14.features)
                                .transition()
                                .duration(2000)
                                .attr("d", pathn)
                                .style("fill", function(d) {
                                  return colors[d.properties.Rank];
                                });

                              d3.select(".pagetitle").text("Sample Space");
                              d3.select(".amount").text("4,85,136 students");
                              $(".linkhere").html('<a href="www.jeeadv.ac.in/pdf/JEE-2011-Report.pdf">Source</a>');
                              $(".txtbox").html(
                                "This cartogram shows the success rates of every state in the famed IITJEE. Although this data only takes IITJEE 2011 into consideration, the distribution is consistent across years. (Take this with a pinch of salt) The data validates the occurence of coaching centres contributing to most of the IITians. Andhra Pradesh and Rajasthan occupy half of the area while the North East shrinks to the size of Jharkhand."
                              );
                            }

                            /**
                             * Accepts an integer as an argument and returns a string with commas
                             * inserted according to the Indian numbering system
                             *
                             * i.e:
                             *
                             * convert(100000)
                             * // => "1,00,000"
                             *
                             * convert(10000000)
                             * // => "1,00,00,000"
                             */
                            function convert(x) {
                              return x
                                .toString()
                                .substr()
                                .replace(/\B(?=\d{3}$)/g, ",")
                                .replace(/\B(?=(\d{2})+(?!\d),)/g, ",");
                            }

                            function updatevalue(d) {
                              var val;
                              var val2;

                              if (selectedvariable == 1) {
                                return ["", ""];
                              } else if (selectedvariable == 2) {
                                if (d.Indata_Lit == 0) {
                                  val = "Total wealth: N/A ";
                                } else if (d.Indata_Lit > 0) {
                                  val = "Literacy: " + d.Indata_Lit + "%";
                                } else {
                                  val = "error";
                                }
                              } else if (selectedvariable == 3) {
                                if (d.GDP == 0) {
                                  val = "GDP: N/A ";
                                } else if (d.GDP > 0) {
                                  val = "GDP: INR " + convert(parseInt(d.GDP * 100) * 1000) + " crores";
                                } else {
                                  val = "error";
                                }
                              } else if (selectedvariable == 4) {
                                if (d.pop == 0) {
                                  val = "Population: N/A ";
                                } else if (d.pop > 0) {
                                  val = "Population: " + convert(parseInt(1000 * d.pop) / 100) + " lakh people";
                                } else {
                                  val = "error";
                                }
                              } else if (selectedvariable == 5) {
                                if (d.Indata_Per == 0) {
                                  val = "GDP/PerCapita: N/A ";
                                } else {
                                  val = "GDP/Capita: INR " + convert(d.Indata_Per) + " rupees";
                                }
                              } else if (selectedvariable == 6) {
                                if (d.hdi == 0) {
                                  val = "HDI: N/A ";
                                } else {
                                  val = "HDI: " + d.hdi.toFixed(3);
                                }
                              } else if (selectedvariable == 7) {
                                val = "Medals: " + d.Indata_Med;
                              } else if (selectedvariable == 8) {
                                val = d.Indata_Rio + " riots per 100,000 people";
                              } else if (selectedvariable == 9) {
                                val = "Forested Area: " + d.Indata_For + "%";
                              } else if (selectedvariable == 10) {
                                val = "Vehicles/1000 people: " + d.Indata_Veh;
                              } else if (selectedvariable == 11) {
                                val = "All India Monthly Alcohol Expenditure: INR " + d.Indata_INR;
                              } else if (selectedvariable == 12) {
                                val =
                                  "Time per Session: " +
                                  parseInt(d.Indata_Por) +
                                  " minutes and " +
                                  (parseInt(d.Indata_Por * 100) % 100) +
                                  " seconds";
                              } else if (selectedvariable == 13) {
                                val = "Obese Proportion: " + d.Indata_Obe + "%";
                              } else if (selectedvariable == 14) {
                                val = "Success Rate: " + d.Indata_RaI + "%";
                              }
                              val2 = d.Rank;
                              if (val2 == 1 || val2 == 21) {
                                var prefix = "st";
                              } else if (val2 == 2 || val2 == 22) {
                                var prefix = "nd";
                              } else if (val2 == 3 || val2 == 23) {
                                var prefix = "rd";
                              } else {
                                var prefix = "th";
                              }

                              return [val, val2 + prefix + " of all states"];
                            }

                            function mouseover(properties) {
                              var code = properties.code;
                              var name = properties.name;
                              var quantity = updatevalue(properties);

                              d3.selectAll(".country")
                                .filter(function(d) {
                                  return d.properties.code == code;
                                })
                                //.transition()
                                //.duration(300)
                                .style("fill", "white");

                              var xpos = d3.event.pageX + 10;
                              var ypos = d3.event.pageY + 20;

                              d3.select(".tooltip2").text(name);

                              d3.select(".tooltip3").text(quantity[0]);

                              d3.select(".tooltip4").text(quantity[1]);

                              d3.selectAll(".tooltip")
                                .style("left", xpos + "px")
                                .style("top", ypos + "px")
                                .transition()
                                .duration(150)
                                .style("opacity", 0.8);
                            }
                            function mouseout(Rank) {
                              d3.selectAll(".country")
                                .filter(function(d) {
                                  return d.properties.Rank == Rank;
                                })
                                .style("fill", function(d) {
                                  return Rank > 0 ? colors[d.properties.Rank] : "#F2E1AF";
                                });

                              d3.selectAll(".tooltip")
                                .transition()
                                .duration(150)
                                .style("opacity", 0);
                            }
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

function addpts(linearr, startp, counts, counte) {
  var linearrnew = linearr;
  var i = -1;
  var addnum = -counts + counte;
  var spacing = counts / (addnum + 1);
  var addindex;
  var priorindex;
  var newval0;
  var newval1;

  while (++i < addnum) {
    addindex = (startp + Math.round((i + 1) * spacing) + i + 1) % linearrnew.length;
    if (addindex == 0) {
      addindex = 1;
    }
    priorindex = (addindex - 1 + linearrnew.length) % linearrnew.length;

    newval0 = (linearrnew[priorindex][0] + linearrnew[addindex][0]) / 2;
    newval1 = (linearrnew[priorindex][1] + linearrnew[addindex][1]) / 2 + 0.00000000001;

    linearrnew.splice(addindex, 0, [newval0, newval1]);
  }

  return linearrnew;
}

function rotatearray(a, inc) {
  a.splice(0, 1);
  for (
    var l = a.length, inc = (Math.abs(inc) >= l && (inc %= l), inc < 0 && (inc += l), inc), i, x;
    inc;
    inc = (Math.ceil(l / inc) - 1) * inc - l + (l = inc)
  )
    for (i = l; i > inc; x = a[--i], a[i] = a[i - inc], a[i - inc] = x);

  a.splice(0, 0, a[a.length - 1]);

  return a;
}

function alignfeatureorder(poly1, poly2) {
  var i = 0;
  var j = 0;
  var tempfeature;
  var n = poly1.features.length;

  while (++i < n) {
    j = 0;

    while (++j < n) {
      if (+poly1.features[j - 1].properties.code > +poly1.features[j].properties.code) {
        tempfeature = poly1.features[j - 1];
        poly1.features[j - 1] = poly1.features[j];
        poly1.features[j] = tempfeature;
      }
      if (+poly2.features[j - 1].properties.code > +poly2.features[j].properties.code) {
        tempfeature = poly2.features[j - 1];
        poly2.features[j - 1] = poly2.features[j];
        poly2.features[j] = tempfeature;
      }
    }
  }

  return [poly1, poly2];
}

function calcrotation(line1, line2) {
  var l1 = line1;
  var l2 = line2;
  var len = line1.length;
  var i;
  var j;
  temparr = [];
  resultarr = [];
  var mindist = [-9999, 9999];

  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      temparr[j] = dist(l1[j], l2[(i + j) % len]);
    }
    resultarr[i] = avg(temparr);

    if (resultarr[i][0] < mindist[1]) {
      mindist[0] = i;
      mindist[1] = resultarr[i][0];
    }
  }

  return mindist[0];
}

function dist(p1, p2) {
  return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
}

function avg(arr) {
  var i;
  var tot = 0;
  var avg1 = 0;
  var stdv = 0;

  for (i = 0; i < arr.length; i++) {
    tot = tot + arr[i];
  }

  avg1 = tot / arr.length;
  tot = 0;
  for (i = 0; i < arr.length; i++) {
    tot = (arr[i] - avg1) * (arr[i] - avg1);
  }
  tot = tot / (arr.length - 1);

  stdv = Math.sqrt(tot);

  return [avg1, stdv];
}
