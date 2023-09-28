function openModal() {
    var modal = document.getElementById('id01');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('id01');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('id01');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

/* var mysql = require('mysql');

var con = mysql.createConnection({
  host: "107.180.1.16",
  user: "fall2023team6",
  password: "fall2023team6"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); /*           node.js code to connect to the backend 

*/
