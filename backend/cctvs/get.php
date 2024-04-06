<?php

// $sql = "SELECT * FROM cctv WHERE '1' 
// order by date_created desc limit 4";
$sql = "SELECT id, durable_no, durable_name, brand, location, floor.floor_name as floor, status.status_name as status, cctv.date_updated FROM cctv
left join floor on cctv.floor = floor.floor_id
left join status on cctv.status = status.status_id
where 1
order by cctv.date_updated desc limit 4;";
$query = mysqli_query($conn, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

echo json_encode([
    'message' => 'test ทดสอบ',
    'result' => $result
], JSON_UNESCAPED_UNICODE);

// echo json_encode(
//                     $result
// , JSON_UNESCAPED_UNICODE);