var s = document.createElement("script")
s.src="https://d3js.org/d3.v5.js"
var body=document.getElementsByTagName("body")[0]
body.after(s);
var csc = d3.selectAll('.title').nodes().forEach(function(e){console.log(e.innerText);})
