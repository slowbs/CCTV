<?php

$sql = "SELECT * FROM cctv WHERE '1' 
order by date_created desc limit 4";
// $sql = "SELECT u_id, name, room_name as room, teacher.teacher_name as teacher, student.date_updated as date_updated , null as completed FROM student
// left join room on student.room = room.room_id
// left join teacher on student.teacher = teacher.teacher_id
// where 1
// order by student.date_updated desc limit 4;";
$query = mysqli_query($conn, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

echo json_encode([
    'message' => 'test ทดสอบ',
    'result' => $result
], JSON_UNESCAPED_UNICODE);

// echo json_encode(
//                     $result
// , JSON_UNESCAPED_UNICODE);