formData = new FormData();

document.getElementById('arquivo').onchange = function(e) {
	if(e.target.files != null && e.target.files.length != 0)
	{
		formData.append("arquivo", e.target.files[0]);
	}	
};

document.getElementById("btnEnviar").onclick = function() {
	var tbNome = document.getElementById("tbNome");
	var nIdade = document.getElementById("nIdade");

	if(tbNome.value != "" && nIdade.value != "")
	{
		formData.append('nome', tbNome.value);
		formData.append('idade', nIdade.value);

		var xmlHttp = new XMLHttpRequest();

		xmlHttp.onreadystatechange = function() {
			if(xmlHttp.readyState === 4 && xmlHttp.status === 200)
				alert(xmlHttp.responseText);
		};
		xmlHttp.open("POST", "recebe.php", true);
		xmlHttp.send(formData);
	}
	else
		alert("Preencha todos os campos!");
};