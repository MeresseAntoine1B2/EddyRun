var s = Snap("#svgout");
var air = false;
var otherRect = s.rect(50,300,50,50,10,10).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'green' });
var rect = s.rect(50,50,150,3);

var clickFunc = function () {
    // reset the animation, may not be needed
    //otherRect.transform('');
    if (air == false)
    {
	air = true;
	otherRect.animate({ transform: 't0, -200,0' },400,mina.easein, endAnim );
    }
};

var unlock = function ()
{
    air = false;
};

var endAnim = function() {
    otherRect.animate({ transform: 't0,0,0' }, 350, mina.easeout, unlock );
}

s.click( clickFunc );

document.onkeydown = clickFunc;
