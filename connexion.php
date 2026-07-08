<?php

$serveur = "localhost";
$user = "root";
$password = "";
$base = "glow_secrets";


$connexion = new mysqli(
    $serveur,
    $user,
    $password,
    $base
);


if($connexion->connect_error){

    die("Erreur connexion base");

}

?>