var s = Snap("#svgout");
var air = false;
var otherRect = s.rect(50,300,50,50,10,10).attr({ fill: 'green' });
var rect = s.rect(50,50,150,3);
var obstacle = s.g();

var saut = function () 
{
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

var endAnim = function()
{
    otherRect.animate({ transform: 't0,0,0' }, 350, mina.easeout, unlock );
};

/**var afficherMap =**/ function test (map) 
{
	// crée les obstacles et les groupes pour la translation
	for (var i = 0; i < map.length; i++) 
	{
		if (map[i][1] == 1)
			obstacle.add(s.rect(75*(i+2),300,50,50).attr({fill: 'red' }));
		else if (map[i][1] == 2)
			obstacle.add(s.rect(55*(i+2),300,50,50).attr({fill: 'blue' }));
	}
};

document.onkeydown = saut;
test(map);