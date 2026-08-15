<?php
echo "Bloque 15 \n";

$producto = [
    "nombre" => "Teclado",
    "precio" => 1200,
    "stock" => 5
];

echo "Producto original:\n";
echo "Nombre: " . $producto["nombre"] . "\n";
echo "Precio: $" . $producto["precio"] . "\n";
echo "Stock: " . $producto["stock"] . "\n";

$producto["precio"] += 200;
$producto["stock"] -= 2;
$producto["categoria"] = "Periféricos";

echo "\nProducto actualizado:\n";
echo "Nombre: " . $producto["nombre"] . "\n";
echo "Precio: $" . $producto["precio"] . "\n";
echo "Stock: " . $producto["stock"] . "\n";
echo "Categoría: " . $producto["categoria"] . "\n";
