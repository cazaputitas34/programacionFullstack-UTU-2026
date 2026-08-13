<?php
echo "Bloque 10 \n";

function calcularTotal($precio, $cantidad) {
    return $precio * $cantidad;
}

echo "Total 1: $" . calcularTotal(150, 3) . "\n";
echo "Total 2: $" . calcularTotal(999.99, 2) . "\n";
echo "Total 3: $" . calcularTotal(50, 10) . "\n";
