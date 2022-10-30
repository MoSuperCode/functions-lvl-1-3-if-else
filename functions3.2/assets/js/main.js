const fz = document.getElementById("fz");
const ff = document.getElementById("ff");
const text = document.getElementById("text");
const preview = document.getElementById("preview");

function test() {
    preview.innerHTML = text.value;
    preview.style.fontSize = fz.value + "px";
    preview.style.fontFamily = ff.value;
}
