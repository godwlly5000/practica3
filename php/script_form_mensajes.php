<?php
     header("Content-type: application/json; charset=utf-8");

     //decodificar la informacion obtenida del cliente

     $informacion=json_decode(file_get_contents("php://input"),true);
        //enviando la respuesta al cliente(JSON)
        echo json_encode($informacion);

    ?>