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

function submit_contact() { 
    if (document.getElementById('nom').value==="" ||
    document.getElementById('email').value==="" ||
    document.getElementById('message').value===""){
        alert("Veuillez remplir tous les champs !");
    } else {
    var res = confirm("Etes-vous sûr de vouloir envoyer ?"); 
    if (res == true) { 
        alert("Informations envoyées avec succès!"); 
        }
    }
    location.reload();
}