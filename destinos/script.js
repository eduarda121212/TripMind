const urlParams = new URLSearchParams(window.location.search);
const destino = urlParams.get("destino");

function mostrar(){
    document.getElementById('destino').textContent = destino
}
