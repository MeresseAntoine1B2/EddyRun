var config = {
    niveau : 1,
    espacement : 3,
    nbColonne : 20,
    nbLigne : 5
}




function generer_map(config)
{
    var espacement = config["espacement"];
    var nbColonne = config["nbColonne"];
    var nbLigne = config["nbLigne"];
    
    var map = [];
    for (var colonne=0; colonne < nbColonne; colonne++) 
    {
        map[colonne] = [];
        for (var ligne=0; ligne < nbLigne; ligne++) 
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


var map = generer_map(config);



