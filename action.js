window.addEventListener("load", function(){
	afficherColoris();
	choixCouleur = coloris.value;
	modifInfos(choixCouleur);
	afficherMenu();
});

var choix = new Array();
choix[0] = new Array("img/lampe-blanc.jpg","24,99€","Disponible sous 24h","Blanc",4);
choix[1] = new Array("img/lampe-gris.jpg","26,99€","Disponible sous 24h","Gris",3);
choix[2] = new Array("img/lampe-rouge.jpg","26,99€","Disponible sous 3 à 6 semaines","Rouge",3);
choix[3] = new Array("img/lampe-taupe.jpg","27,99€","Disponible sous 3 à 5 jours","Taupe",5);

var coloris = document.getElementById("coloris");
coloris.addEventListener("change", function(){
	choixCouleur = coloris.value;
	modifInfos(choixCouleur);
});

function afficherColoris(){
	for (i=0;i<choix.length;i++){
		document.getElementById("coloris").innerHTML += '<option value='+i+'>'+choix[i][3]+'</option>';
	}
}

function modifInfos(choixCouleur){	
	document.getElementById("photoproduit").setAttribute("src", choix[choixCouleur][0]);
	document.getElementById("prix").innerHTML = choix[choixCouleur][1];
	document.getElementById("disponibilite").innerHTML = '<i class="fas fa-shipping-fast"></i>'+' '+choix[choixCouleur][2];
	document.getElementById("couleurChoisie").innerHTML = choix[choixCouleur][3];
	afficherNote(choix[choixCouleur][4]);
}



function afficherNote(note){
	var nombreEtoile = '';
	for(var i=0;i<note;i++){
		nombreEtoile += '<i class="fas fa-star"></i>';
	}
	for(var i=0;i<(5-note);i++){
		nombreEtoile += '<i class="far fa-star"></i>';
	}
	document.getElementById("note").innerHTML = nombreEtoile;
}

function afficherMenu(){
	var menu = new Array();
	menu[0] = new Array("Eclairage Extérieur","Projecteurs","Lampadaires","Bornes Lumineuses","Appliques");
	menu[1] = new Array("Eclairage Intérieur","Plafonniers","Suspensions","Appliques Murales","Lampes à poser");
	menu[2] = new Array("Ampoules","Halogènes","Leds","Spéciales");
	menu[3] = new Array("Accessoires","Visserie","Accrochage","Pièces de rechange");
	
	for(var i=0;i<menu.length;i++){
		document.getElementById("menu").innerHTML += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+menu[i][0]+'</a><div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id='+i+'></div></li>';
		for(var j=1;j<menu[i].length;j++){
			document.getElementById(i).innerHTML += '<a class="dropdown-item" href="#">'+menu[i][j]+'</a>';
		}
	}
}

