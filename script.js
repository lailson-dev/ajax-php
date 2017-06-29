nomeUsuario = prompt("Informe seu nome");
idadeUsuario = prompt("Informe a sua idade");

document.getElementById("btnBuscar").onclick = function() {

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState === 4 && xmlHttp.status === 200)
		{
			document.getElementById("retorno").innerHTML = xmlHttp.responseText;
		}
	};

	var caminhoURL = "recebe.php?nome="+nomeUsuario+"&idade="+idadeUsuario;
	xmlHttp.open("GET", "arquivo.txt", true);
	xmlHttp.send();
};