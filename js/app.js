 
function ajouterAbsence() {

  let nom = document.getElementById('nom').value;

  let table = document.getElementById('tableAbsence');

  let row = table.insertRow();

  row.insertCell(0).innerText = nom;
  
  row.insertCell(1).innerText = new Date().toLocaleDateString();
}