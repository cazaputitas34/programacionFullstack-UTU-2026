<?php
echo "Bloque 14 \n";

$notas = [7, 4, 5, 9, 3, 6];

foreach ($notas as $nota) {
    $estado = ($nota >= 5) ? "Aprobada" : "Desaprobada";
    echo "Nota: $nota - $estado\n";
}
