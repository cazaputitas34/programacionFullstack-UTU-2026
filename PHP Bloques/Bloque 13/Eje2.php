<?php
echo "Bloque 13 \n";

$notas = [5, 8, 6, 3, 9, 4, 7];

$contadorAprobados = 0;
foreach ($notas as $nota) {
    if ($nota >= 6) {
        $contadorAprobados++;
    }
}

echo "Cantidad de notas aprobadas: $contadorAprobados\n";
