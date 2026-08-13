<?php
echo "Bloque 13 \n";

$nombres = ["Ana", "Luis", "Carla", "Diego", "Sofía"];
$nombreBuscado = "Carla";

$encontradoManual = false;
foreach ($nombres as $nombre) {
    if ($nombre === $nombreBuscado) {
        $encontradoManual = true;
        break;
    }
}
echo "Búsqueda manual: " . ($encontradoManual ? "El nombre fue encontrado" : "El nombre no existe") . "\n";

if (in_array($nombreBuscado, $nombres)) {
    echo "Búsqueda con in_array(): El nombre fue encontrado\n";
} else {
    echo "Búsqueda con in_array(): El nombre no existe\n";
}
