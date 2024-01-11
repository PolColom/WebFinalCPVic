const validarFomrulari = function() {
    let nom = document.getElementById("nom").value;
    let cognoms = document.getElementById("cognoms").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let codiPostal = document.getElementById("codiPostal").value;
    let carrer = document.getElementById("carrer").value;
    let numCarrer = document.getElementById("numCarrer").value;
    let plan = document.getElementById("plan").value;

    //si no ens omplen el formulari
    if (nom == "" || cognoms == "" || email == "" || telefon == "" || codiPostal == "" || carrer == "" || numCarrer == "" || plan == "") {
        alert("Si us plau, omple tots els camps del formulari.");
        return false;
    }
    return true;
}