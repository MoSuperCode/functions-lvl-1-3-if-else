function changeBgColor() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    const color = `rgb(${red},${green},${blue})`;
    console.log(color);
    document.body.style.backgroundColor = color;

}
