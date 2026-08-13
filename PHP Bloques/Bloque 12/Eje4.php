<?php
echo "Bloque 12 \n";

$numeros = [10, 20, 30, 40, 50];

$sumaManual = 0;
for ($i = 0; $i < count($numeros); $i++) {
    $sumaManual += $numeros[$i];
}
echo "Suma con for manual: $sumaManual\n";

$sumaFuncion = array_sum($numeros);
echo "Suma con array_sum(): $sumaFuncion\n";
