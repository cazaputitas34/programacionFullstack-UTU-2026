<?php
echo "Bloque 16 \n";

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 600, "stock" => 10],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3],
    ["nombre" => "Pendrive", "precio" => 800, "stock" => 20]
];

foreach ($productos as $producto) {
    if ($producto["precio"] > 1000) {
        echo "Producto: " . $producto["nombre"] . " - Precio: $" . $producto["precio"] . "\n";
    }
}
