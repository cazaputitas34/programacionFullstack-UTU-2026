<?php

echo "Bloque 4 \n";

$nota = 7;

if ($nota < 1 || $nota > 12) {
    echo "Nota invalida";
} elseif ($nota < 4) {
    echo "Insuficiente";
} elseif ($nota < 6) {
    echo "Suficiente";
} elseif ($nota < 8) {
    echo "Bien";
} elseif ($nota < 10) {
    echo "Notable";
} else {
    echo "Sobresaliente";
}
