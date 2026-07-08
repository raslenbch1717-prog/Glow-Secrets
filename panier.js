function ajouterPanier(nom, prix, image){

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    panier.push({
        nom: nom,
        prix: prix,
        image: image
    });

    localStorage.setItem("panier", JSON.stringify(panier));

    alert("Ajouté au panier ✅");
}



let zonePanier = document.getElementById("panier");


if(zonePanier){

    let panier = JSON.parse(localStorage.getItem("panier")) || [];


    if(panier.length === 0){

        zonePanier.innerHTML = "Votre panier est vide 🛒";

    } else {

        zonePanier.innerHTML = "";

        panier.forEach(produit => {

            zonePanier.innerHTML += `

            <div class="carte">

                <img src="${produit.image}" width="150">

                <h3>${produit.nom}</h3>

                <p>${produit.prix} DT</p>

            </div>

            `;

        });

    }

}