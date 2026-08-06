<?php

echo "Bloque 9 \n";

$ahorro = 0;
$mes = 0;

while ($ahorro < 5000) {
    
$mes++;
    $ahorro += 500;
    echo "Mes " . $mes . ": $" . $ahorro . "\n";
}

echo "Son necesarios $mes meses.";