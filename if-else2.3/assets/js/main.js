function difference() {
    const number = parseInt(document.getElementById("number").value);


    if (number < 27) {
        console.log(27 - number);
    } else {
        console.log((number - 27) * 2);
    }

}
