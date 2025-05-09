function showAlert(message) {
  alert(message);
}

function submitForm(e) {
  e.preventDefault();
  alert("Transaction submitted successfully (Demo only)");
}
  document.getElementById('menu-toggle').onclick = function () {
    document.getElementById('nav-links').classList.toggle('active');
  };

