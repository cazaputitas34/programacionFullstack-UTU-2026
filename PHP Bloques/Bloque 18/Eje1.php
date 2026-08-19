<?php
echo "Bloque 18 \n";

function sumarNumeros($numeros) {
    $suma = 0;
    foreach ($numeros as $numero) {
        $suma += $numero;
    }
    return $suma;
}

$numeros = [10, 20, 30, 40];
echo "La suma es: " . sumarNumeros($numeros) . "\n";
