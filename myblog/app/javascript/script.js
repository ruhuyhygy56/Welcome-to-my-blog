console.log("Hi");

function openForm() {
  console.log("Yes bitch I saw it");
  document.getElementById("postForm").style.display = "block";
}
window.openForm = openForm;

function closeForm() {
  document.getElementById("postForm").style.display = "none";
}

window.closeForm = closeForm;
