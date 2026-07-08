let zonePanier = document.getElementById("zonePanier");

let panier = JSON.parse(localStorage.getItem("panier")) || [];


if (panier.length === 0) {

    zonePanier.innerHTML = `
        <p class="vide">Votre panier est vide 🛒</p>
    `;

} else {

    zonePanier.innerHTML = "";

    panier.forEach((produit, index) => {

        zonePanier.innerHTML += `
        
        <div class="produit">

            <img src="${produit.image}" alt="${produit.nom}">

            <div>
                <h3>${produit.nom}</h3>
                <p>${produit.prix} DT</p>

                <button onclick="supprimerProduit(${index})">
                    Supprimer ❌
                </button>
            </div>

        </div>

        `;

    });


    let total = panier.reduce((somme, produit) => {
        return somme + Number(produit.prix);
    }, 0);


    zonePanier.innerHTML += `
        <h2>Total : ${total} DT</h2>
    `;

}


// supprimer produit
function supprimerProduit(index){

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    panier.splice(index,1);

    localStorage.setItem("panier", JSON.stringify(panier));

    location.reload();

}
