document.addEventListener('DOMContentLoaded', function () {
    // Sélection des éléments
    const totalElement = document.querySelector('.total'); // Élément du prix total
    const products = document.querySelectorAll('.card'); // Tous les produits
    let totalPrice = 0; // Variable pour stocker le prix total

    // Fonction pour mettre à jour le prix total
    function updateTotal() {
        totalPrice = 0; // Réinitialiser le total
        products.forEach(product => {
            const quantity = parseInt(product.querySelector('.quantity').textContent); // Quantité
            const unitPrice = parseFloat(product.querySelector('.unit-price').textContent); // Prix unitaire
            totalPrice += quantity * unitPrice; // Ajouter au total
        });
        totalElement.textContent = `${totalPrice} $`; // Afficher le total
    }

    // Ajouter des écouteurs d'événements pour chaque produit
    products.forEach(product => {
        const plusButton = product.querySelector('.fa-plus-circle'); // Bouton +
        const minusButton = product.querySelector('.fa-minus-circle'); // Bouton -
        const quantityElement = product.querySelector('.quantity'); // Élément quantité
        const deleteButton = product.querySelector('.fa-trash-alt'); // Bouton supprimer
        const likeButton = product.querySelector('.fa-heart'); // Bouton like

        // Gérer le bouton "+"
        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal(); // Mettre à jour le total
        });

        // Gérer le bouton "-"
        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal(); // Mettre à jour le total
            }
        });

        // Gérer le bouton "Supprimer"
        deleteButton.addEventListener('click', () => {
            product.remove(); // Supprimer le produit du DOM
            updateTotal(); // Mettre à jour le total
        });

        // Gérer le bouton "Like"
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked'); // Ajouter/retirer la classe "liked"
        });
    });

    // Mettre à jour le total initial
    updateTotal();
});