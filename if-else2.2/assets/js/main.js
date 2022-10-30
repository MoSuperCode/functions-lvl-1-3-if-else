function checkAirQuality() {
    let outputText = document.getElementById("output");
    const range = document.getElementById("range").value;
    if (range >= 0 && range <= 50) {
        output = "Level of health concern: Good Level of health effect: Little or no risk";
        document.body.style.backgroundColor = "green";

    } else if (range >= 50 && range < 100) {
        output = "Level of health concern: Moderate Level of health effect: Acceptable quality";
        document.body.style.backgroundColor = "orange";

    }
    else if (range < 150) {
        output = "Level of health concern: Unhealthy for sensitive groups Level of health effect: Generable publics not likely affected";
        document.body.style.backgroundColor = "red";

    }
    outputText.innerHTML = output;
}