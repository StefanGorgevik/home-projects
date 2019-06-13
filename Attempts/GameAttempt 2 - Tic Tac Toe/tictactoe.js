var x = "X";
var o = "O";

var cells = document.querySelectorAll("td");
console.log(cells)

for(var i = 0; i < cells.length; i++) {
	console.log(cells[i]);
	cells[i].addEventListener("click", function() {
		document.createElement("p").textContent = "x";
		cells[i].appendChild("p")
	})
}
