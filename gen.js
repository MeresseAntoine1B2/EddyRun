function generer_map(niveau = 1)
{
	var espacement = 3;
	var map = [];
	for (var colonne = 0; colonne < 20; colonne++) 
	{
		map[colonne] = [];
		for (var ligne = 0; ligne < 5; ligne++) 
		{
			if (colonne%4 == 0 && ligne==0)			
				map[colonne][ligne] = 1;
			else
				map[colonne][ligne] = 0;
		}
		espacement--;
	}
	return map;	
}


var map = generer_map();
for (var i = 0; i < map.length; i++) 
{
	console.log(map[i])
}