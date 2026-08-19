<?php
echo "Bloque 18 \n";

function buscarProductoPorId($productos, $id) {
    foreach ($productos as $producto) {
        if ($producto["id"] === $id) {
            return $producto;
        }
    }
    return null;
}

$productos = [
    ["id" => 1, "nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["id" => 2, "nombre" => "Mouse", "precio" => 600, "stock" => 10]
];

$resultado = buscarProductoPorId($productos, 2);

if ($resultado !== null) {
    echo "Producto encontrado: " . $resultado["nombre"] . "\n";
} else {
    echo "Producto no encontrado\n";
}
