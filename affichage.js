function saut(svg, personnage)
{
	
}

function animer_long_chemin (path, element, start, dur, callback) 
{
  // Get the path length, so we know how many frames we will animate over
  var len = Snap.path.getTotalLength(path);

  Snap.animate(start, len, function (value) {
    // movePoint gets the path attributes at a certain frame
    var movePoint = Snap.path.getPointAtLength(path, value);

    // applies the attributes to our element
    element.attr({ cx: movePoint.x, cy: movePoint.y });
  }, dur, mina.easeinout, function () {
    callback(path);
  });
};

var svg = Snap("#svgout");

var myPathString = "M 60 0 L 120 0 L 180 60 L 180 120 L 120 180 L 60 180 L 0 120 L 0 60 Z";
var direct = "m 100,100 L 230,140 m -200,100 h 300";
var personnage = svg.path( myPathString );
personnage = personnage.transform("t100,200");
var dir = svg.path(direct);


