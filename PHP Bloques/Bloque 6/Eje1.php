<?php

echo "Bloque 6 \n";

$edad = 10;
$precio = 1000;

if ($edad < 12) {
    $preciototal = $precio * 0.5;
} else {
    $preciototal = $precio;
}

echo "Precio total: $" . $preciototal;
