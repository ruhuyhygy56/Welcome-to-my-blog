console.log("Hi");

function openFormCliente() {
  console.log("Yes bitch I saw it");
  document.getElementById("Cliente").style.display = "block";
}
window.openFormCliente = openFormCliente;

function closeFormCliente() {
  document.getElementById("Cliente").style.display = "none";
}

window.closeFormCliente = closeFormCliente;
