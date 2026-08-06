<?php

echo "Bloque 6 \n";

$precioUnitario = 100;
$cantidad = 6;

$subtotal = $precioUnitario * $cantidad;

if ($cantidad >= 5) {
    $descuento = $subtotal * 0.10;
} else {
    $descuento = 0;
}

$totalFinal = $subtotal - $descuento;

echo "Subtotal: $" . $subtotal . "\n";
echo "Descuento: $" . $descuento . "\n";
echo "Total: $" . $totalFinal;