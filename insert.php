<?php

//https://www.w3schools.com/php/php_json.asp

//if data send by FormData() + URLSearchParams()==============
/* print_r($_POST);
echo $_POST['inp_name'];
echo $_POST['inp_pass']; */

//any value send by post, use file_get_contents(), unless you will get empty value
// $test = json_decode(file_get_contents("php://input"));

//if data send by JSON====================
/* $test = json_decode(file_get_contents("php://input"));

var_dump($test);
echo $test->name;
echo $test->pass; */

//return json to JS====================
/* $test = json_decode(file_get_contents("php://input"));
echo json_encode($test); */
?>