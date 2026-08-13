<?php
echo "Bloque 13 \n";

$numeros = [23, 87, 12, 45, 90, 34];

$mayorManual = $numeros[0];
foreach ($numeros as $numero) {
    if ($numero > $mayorManual) {
        $mayorManual = $numero;
    }
}
echo "Mayor (manual): $mayorManual\n";

echo "Mayor (max()): " . max($numeros) . "\n";
