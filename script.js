function nota() {
    var nota = prompt('Digite a sua nota de 0-100');

    if (nota >= 90) {
        alert('Sua nota foi A');


    } else if (nota >= 80 && nota < 90) {
        alert('Sua nota foi B');


    } else if (nota >= 70 && nota < 80) {
        alert('Sua nota foi C');


    } else if (nota >= 60 && nota < 70) {
        alert('Sua nota foi D');


    } else {
        alert('Sua nota foi F');
    }
}

