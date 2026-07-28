<?php

echo "Bloque 3 \n";

$stockdisponible = 10;
$cantidadsoli = 5;
$precio = 100;
$presuesto = 500;

$costototal = $cantidadsoli * $precio;


if ($cantidadsoli <= $stockdisponible) {
    echo "Hay stock disponible \n";
}  else {
    echo "No hay stock disponible \n";
}


if ($costototal <= $presuesto) {
    echo "El presupuesto es suficiente \n";
}  else {
    echo "El presupuesto no es suficiente \n";
}


if ($cantidadsoli <= $stockdisponible && $costototal <= $presuesto) {
    echo "Se puede realizar la compra \n";
}  else {
    echo "No se puede realizar la compra \n";
}