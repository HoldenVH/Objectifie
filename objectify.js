initDotRad = 25;

var vimage = document.getElementById("vimage");

var makeDot = function(x,y)
{
    var dot = {
	d: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	changeCol: function(e){
	    if(this.getAttribute("fill") == "blue"){
		dot.d.setAttribute("fill", "red");
	    }
	    else{
		vimage.removeChild(this);
		newDott = makeDot(Math.random() * 500, Math.random() * 500);
		vimage.appendChild(newDott.d);
	    }
	    e.stopPropagation();
	}
    }
    dot.d.setAttribute("cx", x);
    dot.d.setAttribute("cy", y);
    dot.d.setAttribute("r", initDotRad);
    dot.d.setAttribute("fill", "blue");
    dot.d.addEventListener("click", dot.changeCol);
    return dot;
};


var dotify = function(e){
    dot = makeDot(e.offsetX, e.offsetY);
    vimage.appendChild(dot.d);
    e.stopPropagation();
};



var clear = function(e){
    while(vimage.firstChild){
	vimage.removeChild(vimage.firstChild);
    }
}

var clr = document.getElementById("clear");
clr.addEventListener("click", clear);

vimage.addEventListener("click", dotify);

