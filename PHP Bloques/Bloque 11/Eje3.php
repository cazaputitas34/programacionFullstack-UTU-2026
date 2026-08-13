<?php
echo "Bloque 11 \n";

function aplicarDescuento($precio, $porcentaje) {
    $descuento = $precio * ($porcentaje / 100);
    return $precio - $descuento;
}

$precioFinal = aplicarDescuento(1000, 10);
echo "Precio final: $precioFinal\n";
