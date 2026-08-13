<?php
echo "Bloque 12 \n";

$nombres = ["Ana", "Luis", "Carla", "Diego", "Sofía"];

echo "Con for:\n";
for ($i = 0; $i < count($nombres); $i++) {
    echo $nombres[$i] . "\n";
}

echo "Con foreach:\n";
foreach ($nombres as $nombre) {
    echo $nombre . "\n";
}
