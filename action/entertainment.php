<?php
$data = array(
	array(
		"id" => 1,
		"title" => "魔",
		"writer" => "张杰",
		"date" => 1455808822088,
		"content" => "创作之都"
	),
	array(
		"id" => 2,
		"title" => "成都",
		"writer" => "赵磊",
		"date" => 1455808822088,
		"content" => "成都之歌"
	),
	array(
		"id" => 3,
		"title" => "卡门",
		"writer" => "杜丽莎",
		"date" => 1455808822088,
		"content" => "独奏"
	),
	array(
		"id" => 4,
		"title" => "百年孤独",
		"writer" => "狮子合唱",
		"date" => 1455808822088,
		"content" => "时间的洗礼"
	),
	array(
		"id" => 5,
		"title" => "第一次",
		"writer" => "光良",
		"date" => 1455808822088,
		"content" => "迪玛希"
	)
);
$result = array(
	"errno" => 0,
	"data" => $data
);
echo json_encode($result);