<?php
echo "Bloque 11 \n";

function esMayorDeEdad($edad) {
    if ($edad >= 18) {
        return true;
    } else {
        return false;
    }
}

var_dump(esMayorDeEdad(20));
var_dump(esMayorDeEdad(15));
