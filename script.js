document.getElementById("fotografia").onchange = function(e) {
	if(e.target.files != null && e.target.files.length != 0)
	{
		var arquivo = e.target.files[0];
		var formData = new FormData();
		formData.append("fotografia", arquivo);

		var xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
				alert(xmlhttp.responseText);
		};

		xmlhttp.open("POST", "recebe.php", true);
		xmlhttp.send(formData);
	}
};