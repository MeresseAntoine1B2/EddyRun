function afficher_map (map) {
    var line = "";
    for ( var i=0 ; i < map[0].length ; i++ )
    {
        for ( var j=0 ; j < map.length ; j++)
        {
            line += map[j][i];
        }
        console.log( line );
        line = "";
    }
}

afficher_map(map);