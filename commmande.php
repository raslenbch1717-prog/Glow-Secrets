<?php

include "connexion.php";


$nom = $_POST['nom'];

$telephone = $_POST['telephone'];

$adresse = $_POST['adresse'];

$paiement = $_POST['paiement'];



$sql = "INSERT INTO commandes
(nom, telephone, adresse, paiement)

VALUES

('$nom','$telephone','$adresse','$paiement')";



if($connexion->query($sql)){

echo "

<h1>Commande confirmée ✅</h1>

<p>Merci $nom 💗</p>

<p>Votre commande est enregistrée.</p>

";

}

else{

echo "Erreur : ".$connexion->error;

}


$connexion->close();


?>