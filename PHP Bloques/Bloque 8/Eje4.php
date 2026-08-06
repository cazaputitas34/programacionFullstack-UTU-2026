<?php

echo "Bloque 8 \n";

$contador = 0;

for ($i = 1; $i <= 50; $i++) {
    if ($i % 3 == 0) {
        $contador += $i;
    }

}


echo "Si se suman los multiplos de 3 da: $contador ";

