

var s = Snap("#svgout");
var air = false;
var play = true;
var eddy = s.rect(50,300,50,50,10,10).attr({ fill: 'green' });
var obstacle = s.g();

var saut = function () 
{
    if (air == false)
    {
		air = true;
		eddy.animate({ transform: 't0, -150,0' },250,mina.easein, endAnim );
    }
};

var unlock = function ()
{
    air = false;
};

var endAnim = function()
{
    eddy.animate({ transform: 't0,0,0' }, 275, mina.easeout, unlock );
};

/**function creeObstacle (map, config, decalage = 0) 
{
	// crée les obstacles et les groupes pour la translation
	for (var i = 0; i < map.length; i++) 
	{
		if (map[i][1] == 1)
			obstacle.add(s.rect(75*(i+2)+decalage,300,50,50).attr({fill: 'red' }));
		else if (map[i][1] == 2)
			obstacle.add(s.rect(75*(i+2)+decalage,300,50,50).attr({fill: 'blue' }));
	}
	decalage += 1550;
	obstacle.animate({ transform: 't-'+ decalage +', 0, 0' },5000,mina.linear, function () 
																						{
																							obstacle = s.g();
																							creeObstacle(map, config,640);																						
																						}
	);
}
**/

function creeObstacle(map, groupe, decalage=0)
{
	for (var i = 0; i < map.length; i++) 
	{
		if (map[i][1] == 1)
			groupe.add(s.rect(decalage+75*(i+2),300,50,50).attr({fill: 'red' }));
		else if (map[i][1] == 2)
			groupe.add(s.rect(decalage+75*(i+2),300,50,50).attr({fill: 'blue' }));
		else if (map[i][1]==4)
			groupe.add(s.rect(decalage+75*(i+2),300,5,50).attr({fill: 'yellow' }));
	}
}



function animerObstacle(groupe, config, decalage=2220)
{
	//var carte = generer_map(config);
	var groupe_2 = s.g();
	groupe.animate({ transform: 't-'+ 2220 +', 0, 0' },5000,mina.linear, function () 
																						{
																							creeObstacle(map2, groupe_2);
																							afficher_map(map2);
																							animerObstacle(groupe_2, config,640);																	
																						});
}


document.onkeydown = saut;
creeObstacle(map, obstacle, 640);
animerObstacle(obstacle, config);
