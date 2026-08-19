<?php
echo "Bloque 16 \n";

$productos = [
    ["nombre" => "Teclado", "precio" => 1200],
    ["nombre" => "Mouse", "precio" => 600],
    ["nombre" => "Monitor", "precio" => 15000]
];

foreach ($productos as $producto) {
    echo "Producto: " . $producto["nombre"] . " - Precio: $" . $producto["precio"] . "\n";
}
