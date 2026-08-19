<?php
echo "Bloque 17 \n";

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 600, "stock" => 10],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3],
    ["nombre" => "Notebook", "precio" => 85000, "stock" => 2]
];

$productoMasCaro = $productos[0];

foreach ($productos as $producto) {
    if ($producto["precio"] > $productoMasCaro["precio"]) {
        $productoMasCaro = $producto;
    }
}

echo "Producto más caro: " . $productoMasCaro["nombre"] . "\n";
echo "Precio: $" . $productoMasCaro["precio"] . "\n";
