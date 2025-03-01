var paragraph = document.getElementById("changeColor");
// paragraph.addEventListener("click", function () {
// 	paragraph.style.color = "red";
// });

paragraph.addEventListener("click", function () {
	if (paragraph.style.color === "red") {
		paragraph.style.color = "black";
	} else {
		paragraph.style.color = "red";
	}
});
