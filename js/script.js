function developper(button) {
    const parent = button.parentElement;
    const list = parent.querySelector('.underlist');
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}

function Afficher_click(bouton) {
    const contenu = bouton.nextElementSibling;

    if (contenu) {
        if (contenu.style.display === "block") {
            contenu.style.display = "none";
        } else {
            contenu.style.display = "block";
        }
    }
}