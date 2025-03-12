function afficherResultat(action, nombre1, nombre2) {
    const resultat = operations(action, nombre1, nombre2);
    document.getElementById('resultat').innerText = `Le résultat est : ${resultat}`;
}
function calculer() {
    const nombre1 = parseFloat(document.getElementById('nombre1').value);
    const nombre2 = parseFloat(document.getElementById('nombre2').value);
    const action = document.getElementById('operation').value;
    afficherResultat(action, nombre1, nombre2);
}