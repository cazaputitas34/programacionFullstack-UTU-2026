<?php
echo "Bloque 14 \n";

$numeros = [12, 7, 19, 4, 25, 8, 15, 3];

echo "Números: ";
foreach ($numeros as $numero) {
    echo $numero . " ";
}
echo "\n";

$suma = array_sum($numeros);
echo "Suma: $suma\n";

$promedio = $suma / count($numeros);
echo "Promedio: $promedio\n";

echo "Mayor: " . max($numeros) . "\n";
echo "Menor: " . min($numeros) . "\n";

$pares = 0;
$impares = 0;
foreach ($numeros as $numero) {
    if ($numero % 2 === 0) {
        $pares++;
    } else {
        $impares++;
    }
}
echo "Cantidad de pares: $pares\n";
echo "Cantidad de impares: $impares\n";
