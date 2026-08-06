<?php

echo "Bloque 6 \n";

$total = 3500;

if ($total < 1000) {
    $descuento = 0;
} elseif ($total >= 1000 && $total <= 4999) {
    $descuento = $total * 0.10;
} else {
    $descuento = $total * 0.20;
}

$totalFinal = $total - $descuento;

echo "Total inicial: $" . $total . "\n";
echo "Descuento: $" . $descuento . "\n";
echo "Total final: $" . $totalFinal;
