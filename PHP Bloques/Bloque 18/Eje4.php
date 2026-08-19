<?php
echo "Bloque 18 \n";

function obtenerProductosConStock($productos) {
    $conStock = [];
    foreach ($productos as $producto) {
        if ($producto["stock"] > 0) {
            $conStock[] = $producto;
        }
    }
    return $conStock;
}

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 600, "stock" => 0],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3]
];

$productosConStock = obtenerProductosConStock($productos);

foreach ($productosConStock as $producto) {
    echo $producto["nombre"] . " - Stock: " . $producto["stock"] . "\n";
}
