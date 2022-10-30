function compare() {
    const age1 = parseInt(document.getElementById("age1").value);
    const age2 = parseInt(document.getElementById("age2").value);
    const height1 = parseInt(document.getElementById("height1").value);
    const height2 = parseInt(document.getElementById("height2").value);
    const sum1 = age1 * 5 + height1;
    const sum2 = age2 * 5 + height2;


    if (sum1 < sum2 && sum1 > 0 && sum2 > 0) {
        console.log("Person 2 ist die Gewinnerin / der Gewinner! " + sum2);
    } else if (sum1 > sum2 && sum1 > 0 && sum2 > 0) {
        console.log("Person 1 ist die Gewinnerin / der Gewinner! " + sum1);
    } else if (sum1 = sum2 && sum1 > 0 && sum2 > 0) {
        console.log("UNENTSCHIEDEN-! Heute sind wir ALLE Gewinner! " + sum1 + sum2);
    } else {
        console.log("Gibt euer echtes Alter und eure echte Größe an! ");
    }


};