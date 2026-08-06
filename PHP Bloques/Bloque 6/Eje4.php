<?php

echo "Bloque 6 \n";

$nombreProducto = "Mouse";
$precio = 500;
$stock = 20;
$cantidadpedida = 12;

if ($stock >= $cantidadpedida) {
    $total = $precio * $cantidadpedida;

    if ($cantidadpedida >= 10) {
        $descuento = $total * 0.15;
        $total = $total - $descuento;
    }

    echo "Producto: " . $nombreProducto . "\n";
    echo "Total: $" . $total;
} else {
    echo "No quedan";
}