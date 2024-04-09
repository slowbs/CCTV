<?php

if (isset($_GET['id'])) {
    $query = "DELETE from cctv where id = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'i',
        $_GET['id']
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($conn);

    if ($error_message) { //ใช้ในการ เช็ค error
        http_response_code(500);
        exit(json_encode([
            'message' => $error_message
        ]));
    }

    exit(json_encode([
        'message' => 'ลบรายการสำเร็จ'
    ]));


    // echo json_encode([
    //     'message' => 'สวัสดี World DELETE',
    //     'Id' => $_GET['id']
    // ], JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(400);
    echo json_encode([
        'message' => 'Request is อินเวลิด'
    ], JSON_UNESCAPED_UNICODE);
}

// echo json_encode([
//     'message' => 'สวัสดี World DELETE'
// ], JSON_UNESCAPED_UNICODE);
