// Función para calcular el factorial de un número
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Función para calcular el valor de la serie
function calcularSerie() {
    const x = parseFloat(document.getElementById("valorX").value);
    const n = parseInt(document.getElementById("valorN").value);
    let resultado = 0;

    // Verificar que los valores de entrada sean válidos
    if (isNaN(x) || isNaN(n) || n <= 0) {
        document.getElementById("resultadoSerie").textContent = "Por favor, ingresa valores válidos para x y un número positivo para n.";
        return;
    }

    // Calculo de la serie
    for (let i = 1; i <= n; i++) {
        const coeficiente = factorial(2 * i); // Calculamos el factorial de 2n
        const termino = coeficiente * Math.pow(x, 2 * i); // Potencia de x a 2n

        // Alternancia de signos: positiva para i impar, negativa para i par
        resultado += (i % 2 === 0 ? -termino : termino);
    }

    // Mostrar el resultado en el HTML
    document.getElementById("resultadoSerie").textContent = `S = ${resultado}`;
}
