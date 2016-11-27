function l (obj = "chat") { console.log(obj)}
function prob( p ) {
    var x = Math.random();
    return x < p ? true : false;
}

var AIR = 0;
var POUBELLE = 1;
var HOMMEBLANC = 2;
var PONT = 3;
var FIN = 4;

var config = {
    niveau : 1,
    espacementMin : 3,
    espacementMax : 5,
    nbColonne : 20,
    nbLigne : 2,
    probObstacle : 0.2,
    probBridge : 0.1
}
var obstacle = {
    poubelle : [POUBELLE , 1],
    hommeBlanc : [HOMMEBLANC , 1]
}

var espacement = 0;
var bridge = false;


function generer_map(config)
{
    var nbColonne = config["nbColonne"];
    var nbLigne = config["nbLigne"];

    var map = [];
    // COLONNE 
    for (var i=0; i < nbColonne; i++){

        map[i] = [];
        //COLONNE
        for (var j=0; j < nbLigne; j++){          
            if ( j==1 ) {
                map[i][j] = generateTile();
                
                // Si l'espacement est supérieur a l'espacement MAX , on force la génération
                if ( espacement <= -config["espacementMax"] + config["espacementMin"]) {
                    map[i][j] = rouletteWheel();
                }
            } else {
                map[i][j] = switchBridge();
            }
            
            if ( i == nbColonne-1) {
                map[i][j] = FIN;
            }

        }
        // On reduis l'espacement
        espacement--

    }
    return map;	
}

// Verifie la probabilité donnée dans la config puis appelle rouletteWheel si oui
function generateTile () {

    var value = 0;

    if ( espacement <= 0 ) {     
        if ( prob( config["probObstacle"] )) {
            // On crée un obstacle :
            value = rouletteWheel(); 
            // On reset l'espacement pour eviter d'avoir 2 obstacles a la suite

        }        
    }

    return value;

}

// Genere un obstacle choisi aléatoirement parmis tous les obstacles
function rouletteWheel () {

    espacement = config["espacementMin"];
    var value = 0;
    var totalProb = 0;
    for ( var obj in obstacle ) {
        totalProb += obstacle[obj][1] ;
    }    
    var x = Math.random() * totalProb;
    var cumulativeProbability = 0;
    var notFound = true;

    for ( var obj in obstacle ) {
        cumulativeProbability += obstacle[obj][1]
        if ( x < cumulativeProbability && notFound) {
            value = obstacle[obj][0];
            notFound = false;
        }
    }

    return value;

}

// Alterne en pont et pas pont selon la probabilité donné en config;
function switchBridge () {
    
    var value = 0;
    if ( prob( config["probBridge"] )) {
        bridge = !bridge;
    }
    if ( bridge ) {
            value = PONT;
        } else {
            value = AIR;
        }
    
    return value;
}

var map = generer_map(config);



