document.getElementById("contentHolder").innerHTML = "<p>Test 123</p>";

var prviParagraf = document.createElement("p");
prviParagraf.innerHTML = "Prvi JS paragraf";
prviParagraf.style.color = "red";

document.getElementById("contentHolder").appendChild(prviParagraf);

var linkDoGoogla = document.createElement("a");
linkDoGoogla.setAttribute("href", "https://google.com");
linkDoGoogla.innerHTML = "Klikni do Googla";
linkDoGoogla.style.color = "red";
document.getElementById("contentHolder").appendChild(linkDoGoogla);

var slika = document.createElement("img");
slika.setAttribute(
	"src",
	"https://sportklub.n1info.rs/wp-content/uploads/2024/02/15/1708033925-IMG_6213-750x477.jpg"
);
slika.setAttribute("alt", "slika od formule 1");
// slika.setAttribute("class", "slika border");
slika.classList.add("slika");
slika.classList.add("border");
document.getElementById("contentHolder").appendChild(slika);
