<?php
echo "Bloque 12 \n";

$precios = [100, 250.50, 999.99, 15, 42.75];

foreach ($precios as $precio) {
    echo "$" . $precio . "\n";
}

echo "Cantidad de precios: " . count($precios) . "\n";
