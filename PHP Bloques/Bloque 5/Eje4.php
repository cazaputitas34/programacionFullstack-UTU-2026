<?php

echo "Bloque 5 \n";

$edad = 15;
$tieneEntrada = true;
$acompanadoPorAdulto = true;

if (($edad >= 18 && $tieneEntrada) || ($acompanadoPorAdulto && $tieneEntrada)) {
    echo "Podes pasar al evento";
} else {
    echo "No podes pasar al evento";
}