<?php
echo "Bloque 17 \n";

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 600, "stock" => 10],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3]
];

$nombreBuscado = "Mouse";

foreach ($productos as $producto) {
    if ($producto["nombre"] === $nombreBuscado) {
        echo "Producto: " . $producto["nombre"] . "\n";
        echo "Precio: $" . $producto["precio"] . "\n";
        echo "Stock: " . $producto["stock"] . "\n";
        break;
    }
}
