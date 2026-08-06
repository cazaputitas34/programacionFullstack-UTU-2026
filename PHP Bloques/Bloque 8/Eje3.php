<?php

echo "Bloque 8 \n";

$contador = 0;

for ($i = 1; $i <= 50; $i++) {
    if ($i % 2 == 0) {
        $contador++;
    }
}
echo "Los números pares son: " . $contador;