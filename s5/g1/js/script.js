var data = new Date();
console.log(data);

var dataJS = document.getElementById('data');

var dataAnnoJS = document.getElementById('data-anno');
var dataMeseJS = document.getElementById('data-mesi');
var dataGiorniJS = document.getElementById('data-giorni');
var dataOraJS = document.getElementById('data-ore');
var dataMinutiJS = document.getElementById('data-minuti');

dataAnnoJS.innerHTML = data.getFullYear();
dataMeseJS.innerHTML = data.getMonth() + 1;
dataGiorniJS.innerHTML = data.getDate();
dataOraJS.innerHTML = data.getHours();
dataMinutiJS.innerHTML = data.getMinutes();
