<?php
echo "Bloque 11 \n";

function calcularPromedio($nota1, $nota2, $nota3) {
    return ($nota1 + $nota2 + $nota3) / 3;
}

function estaAprobado($promedio) {
    return $promedio >= 6 ? "Aprobado" : "Desaprobado";
}

$promedio = calcularPromedio(8, 6, 7);
echo "Promedio: $promedio\n";
echo "Estado: " . estaAprobado($promedio) . "\n";
