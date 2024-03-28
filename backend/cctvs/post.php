<?php
$data = json_decode(file_get_contents('php://input'));

if (isset($data->durable_no) && isset($data->durable_name) && isset($data->location)) {
    if (empty($data->durable_no)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'Durable number is required'
        ]));
    }
    if (empty($data->durable_name)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'Durable name is required'
        ]));
    }
    if (empty($data->location)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'Location is required'
        ]));
    }

    //กรณีที่เงือนไขครบถ้วน
    // echo json_encode([
    //     'message' => 'valid',
    //     'data' => $data->name
    // ]);
    $query = "INSERT INTO cctv (durable_no, durable_name, location) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, 'sss',
        $data->durable_no,
        $data->durable_name,
        $data->location
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($conn);

    if($error_message){ //ใช้ในการ เช็ค error
        http_response_code(500);
        exit(json_encode([
            'message' => $error_message
        ]));
    }

    echo json_encode([
        'message' => 'เพิ่มสำเร็จ'
    ]);

} else {
    http_response_code(400);
    exit(json_encode([
        'message' => 'The request is invalid'
    ]));
}

// echo json_encode([
//     'message' => 'สวัสดี World POST',
//     // 'Post_Data' => 'Text : ' . $data->message
//     'Post_Data' => $data->name
//     // 'Post_Data' => $data
// ], JSON_UNESCAPED_UNICODE);