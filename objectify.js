initDotRad = 10;

//canvas and context
var vimage = document.getElementById("vimage");
//var ctx = vimage.getContext("2d");


var makeDot = function(x,y)
{
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("r", initDotRad);
    dot.setAttribute("fill", "blue");
    return dot;
};

var c = function(e){
    dot = makeDot(e.offsetX, e.offsetY);
    console.log(dot);

    vimage.appendChild(dot);
}
/*
var clear = function(e){
    while()
}
*/
/*
var b = document.getElementById("clear");
b.addEventListener("click", clear);
*/

vimage.addEventListener("click", c);
