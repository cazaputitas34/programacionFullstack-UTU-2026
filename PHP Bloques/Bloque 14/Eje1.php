<?php
echo "Bloque 14 \n";

$numeros = [4, 8, 15, 16, 23, 42];

$sumaTotal = array_sum($numeros);
$cantidadElementos = count($numeros);
$promedio = $sumaTotal / $cantidadElementos;

echo "Suma total: $sumaTotal\n";
echo "Cantidad de elementos: $cantidadElementos\n";
echo "Promedio: $promedio\n";
