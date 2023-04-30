<?php

$conexion = mysqli_connect('localhost','root',' ','tdatabase')
or die(mysql_error($mysqli));

insertar($conexion);

function insertar($conexion){
    $nombre = $_POST['nameteacher'];
    $apellidos = $_POST['lastnameteacher'];
    $fecha_de_nacimiento = $_POST['birthday_day'];
    $edad = $_POST['age'];
    $id = $_POST['username'];
    $email = $_POST['email'];
    $telefono = $_POST['number'];
    $contrasena = $_POST['password'];
    $confir_de_contrasena = $_POST['confirm_password'];

    $consulta = 'INSERT INTO teachers(nombre,apellidos,fecha_de_nacimiento,edad,id,email,telefono,contrasena,confir_de_contrasena)
    VALUES ('$nameteacher', '$lastnameteacher', '$birthday_day', '$age', '$username', '$email' ,'$number' , '$password', '$confirm_password')';
    mysqli_query($conexion, $consulta);
    mysqli_close($conexion);
}
?>
