<?php 

	if($_POST)
	{
		$nome = $_POST['nome'];
		$idade = $_POST['idade'];
		$fotografia = $_FILES['arquivo'];

		if(move_uploaded_file($fotografia['tmp_name'], $fotografia['name']))
			echo $nome." ".$idade;
		else
			echo "Ocorreu um erro.";

	}

 ?>