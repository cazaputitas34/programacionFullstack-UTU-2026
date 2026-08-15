<?php
echo "Bloque 15 \n";

$producto = [
    "nombre" => "Teclado",
    "precio" => 1200,
    "stock" => 5
];

$cantidadSolicitada = 3;

if ($cantidadSolicitada <= $producto["stock"]) {
    $total = $producto["precio"] * $cantidadSolicitada;
    $producto["stock"] -= $cantidadSolicitada;

    echo "Venta realizada:\n";
    echo "Producto: " . $producto["nombre"] . "\n";
    echo "Cantidad: $cantidadSolicitada\n";
    echo "Total: $" . $total . "\n";
    echo "Stock restante: " . $producto["stock"] . "\n";
} else {
    echo "Error: no hay suficiente stock disponible.\n";
}
