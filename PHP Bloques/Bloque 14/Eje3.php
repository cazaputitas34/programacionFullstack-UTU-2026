<?php
echo "Bloque 14 \n";

$notas = [8, 3, 5, 9, 6, 4, 7, 2];

echo "Notas: ";
foreach ($notas as $nota) {
    echo $nota . " ";
}
echo "\n";

$sumaNotas = array_sum($notas);
$promedio = $sumaNotas / count($notas);
echo "Promedio: $promedio\n";

$aprobados = 0;
$desaprobados = 0;
foreach ($notas as $nota) {
    if ($nota >= 6) {
        $aprobados++;
    } else {
        $desaprobados++;
    }
}
echo "Aprobados: $aprobados\n";
echo "Desaprobados: $desaprobados\n";
