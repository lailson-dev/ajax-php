<?php 
	
	if($_FILES)
	{
		$arquivo = $_FILES['fotografia'];
		if(move_uploaded_file($arquivo['tmp_name'], $arquivo['name']))
			echo "Imagem enviada com sucesso!";
		else
			echo "Erro ao enviar a imagem!";
	}

 ?>