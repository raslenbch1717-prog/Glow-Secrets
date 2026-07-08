let zonePanier = document.getElementById("zonePanier");

let panier = JSON.parse(localStorage.getItem("panier")) || [];

if (panier.length === 0) {

    zonePanier.innerHTML = "<p>Votre panier est vide</p>";

} else {

    panier.forEach(produit => {

        zonePanier.innerHTML += `
            <div class="produit">
                <img src="${produit.image}" width="100">
                <h3>${produit.nom}</h3>
                <p>${produit.prix} DT</p>
            </div>
        `;

    });

}
