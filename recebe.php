<?php 
	
	if(isset($_GET))
	{
		$nomeUsr = $_GET['nome'];
		$idadeUsr = $_GET['idade'];		

		if($idadeUsr >= 18)
			echo "O usuário ".$nomeUsr." é maior de idade.";
		else
			echo "O usuário ".$nomeUsr." é menor de idade.";
	}
	else
		echo "Oxe";

 ?>