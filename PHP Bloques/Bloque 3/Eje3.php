<?php

echo "Bloque 3 \n";

$numero = 10;
$texto = "10";

if ($numero == $texto) {
    echo "Los valores son iguales \n";
} else {
    echo "Los valores son diferentes \n";
}

if ($numero === $texto) {
    echo "Los valores y tipos son iguales \n";
} else {
    echo "Los valores o tipos son diferentes \n";
}