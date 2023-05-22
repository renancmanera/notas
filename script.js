function nota() {
    var nota = prompt('Digite a sua nota de 0-100');

    if (nota >= 0 && nota <= 100) {
        if (nota >= 90) {
            alert('Sua nota foi A');
        } else if (nota >= 80) {
            alert('Sua nota foi B');
        } else if (nota >= 70) {
            alert('Sua nota foi C');
        } else if (nota >= 60) {
            alert('Sua nota foi D');
        } else if (60 >= nota) {
            alert('Sua nota foi F');
        }
    } else {
        alert('Nota inválida! Digite um valor entre 0 e 100.');
    }
}
