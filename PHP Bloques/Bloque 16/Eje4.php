<?php
echo "Bloque 16 \n";

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 600, "stock" => 10],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3]
];

$valorTotal = 0;

foreach ($productos as $producto) {
    $valorInventario = $producto["precio"] * $producto["stock"];
    $valorTotal += $valorInventario;
    echo "Producto: " . $producto["nombre"] . " - Valor en inventario: $" . $valorInventario . "\n";
}

echo "Valor total del inventario: $" . $valorTotal . "\n";
