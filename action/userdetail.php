<?php
$data = array(
	"id" => 1,
	"username" => "小铭1",
	"telephone" => "12345678901",
	"password" => "123",
	"sex" => '男',
	"info" => "用户简介"
);
$result = array(
	"errno" => 0,
	"data" => $data
);
echo json_encode($result);