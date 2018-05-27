var vrstica = [];
var tabela = [];
$.ajax({
  url: 'nglag.csv',
  dataType: 'text',
}).done(zgraditabelo);

function zgraditabelo(data) {
  
  var allRows = data.split(/\r?\n|\r/);
  tabela = allRows;
  var table = '<center><table>';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
         

    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    

    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '<br><br><br></table></center>';
  
  $('body').append(table);


// random
novo();


 
}
function box1pom(){
document.getElementById("box1").value = vrstica[0];
}
function box2pom(){
document.getElementById("box2").value = vrstica[2];
}
function box3pom(){
document.getElementById("box3").value = vrstica[3];
}
function box4pom(){
document.getElementById("box4").value = vrstica[4];
}
function preveri(){
  if ( document.getElementById("box1").value === vrstica[0]){document.getElementById("box1").value = document.getElementById("box1").value+ " <- pravilno" }
  else {
    document.getElementById("box1").value = document.getElementById("box1").value+ " <- narobe";
     }
if ( document.getElementById("box2").value === vrstica[2]){document.getElementById("box2").value = document.getElementById("box2").value+ " <- pravilno" }
  else {
    document.getElementById("box2").value = document.getElementById("box2").value+ " <- narobe";
     }
if ( document.getElementById("box3").value === vrstica[3]){document.getElementById("box3").value = document.getElementById("box3").value+ " <- pravilno" }
  else {
    document.getElementById("box3").value = document.getElementById("box3").value+ " <- narobe";
     }
if ( document.getElementById("box4").value === vrstica[4]){document.getElementById("box4").value = document.getElementById("box4").value+ " <- pravilno" }
  else {
    document.getElementById("box4").value = document.getElementById("box4").value+ " <- narobe";
     }
}

function novo(){
ponovno();

  var x = Math.floor((Math.random() * 118) + 1);

//slovenski glagol zgori
vrstica = tabela[x]
vrstica = vrstica.split(',')
document.getElementById("slogl").innerHTML = vrstica[1];
}

function ponovno(){
document.getElementById("box1").value = "";
document.getElementById("box2").value = "";
document.getElementById("box3").value = "";
document.getElementById("box4").value = "";
}
//preveri




      //document.getElementById("demo").innerHTML = lines[line];
function myFunction() {
    var x = document.getElementById("demo")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}

