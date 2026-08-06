<?php

echo "Bloque 5 \n";

$precio = 500;
$presupuesto = 2000;
$stock = 10;
$cantidadSolicitada = 3;

if ($stock >= $cantidadSolicitada && $presupuesto >= ($precio * $cantidadSolicitada)) {
    echo "Se hizo la compra";
} else {
    echo "No se pudo hacer la compra";
}
