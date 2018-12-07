setInterval(function(){
	var rand = random();

	if (rand == 6) {
		$("#bgPerfil").attr("src","");
		$("#bgPerfil2").attr("src","img/35.gif");
	}
	if (rand == 7) {
		$("#bgPerfil").attr("src","");
		$("#bgPerfil2").attr("src","img/33.gif");
	}
	if (rand == 5) {
		$("#bgPerfil").attr("src","img/22.gif");
		$("#bgPerfil2").attr("src","img/49.gif");
	}		
	if (rand == 4) {
		$("#bgPerfil").attr("src","img/22.gif");
		$("#bgPerfil2").attr("src","img/48.gif");
	}		
	if (rand == 8) {
		$("#bgPerfil").attr("src","img/28.gif");
		$("#bgPerfil2").attr("src","img/47.gif");
	}			
	if (rand == 0 || rand == 1 || rand == 2 || rand == 3) {
		var imgR = ["19", "24", "26", "40"];
		$("#bgPerfil").attr("src","img/jota_pe2.jpg");			
		$("#bgPerfil2").attr("src","img/"+imgR[rand]+".gif");		
	}
},3000);

function random() {
    var rand = Math.floor((Math.random() * 9) + 0);
	return rand;
}