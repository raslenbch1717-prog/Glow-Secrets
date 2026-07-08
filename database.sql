CREATE DATABASE glow_secrets;

USE glow_secrets;


CREATE TABLE commandes (

id INT AUTO_INCREMENT PRIMARY KEY,

nom VARCHAR(100),

telephone VARCHAR(20),

adresse TEXT,

paiement VARCHAR(50),

date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);