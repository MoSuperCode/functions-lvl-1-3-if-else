function weather() {
    const weather = document.getElementById("weather").value;

    if (weather >= 0 && weather <= 2) {
        console.log("schlecht");
    }
    else if (weather >= 3 && weather <= 5) {
        console.log("okay");
    }
    else if (weather >= 6 && weather <= 7) {
        console.log("gut");
    }
    else if (weather >= 8 && weather <= 10) {
        console.log("super");
    }
    else {
        console.log("gib eine Zahl zwischen 0-10 du Hund");
    }
}