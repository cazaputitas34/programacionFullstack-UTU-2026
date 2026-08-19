<?php
echo "Bloque 18 \n";

function contarAprobados($notas) {
    $contador = 0;
    foreach ($notas as $nota) {
        if ($nota >= 6) {
            $contador++;
        }
    }
    return $contador;
}

$notas = [5, 8, 6, 3, 9, 4, 7];
echo "Cantidad de aprobados: " . contarAprobados($notas) . "\n";
