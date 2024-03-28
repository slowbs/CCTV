<?php
//ข้อมูลกล้อง
$routes['/api/cctvs']['GET'] = 'cctvs/get.php';
$routes['/api/cctvs']['POST'] = 'cctvs/post.php';
$routes['/api/cctvs']['PUT'] = 'cctvs/put.php';
$routes['/api/cctvs']['DELETE'] = 'cctvs/delete.php';

//ข้อมูลสถานะกล้อง
$routes['/api/status']['GET'] = 'status/get.php';
$routes['/api/status']['POST'] = 'status/post.php';
$routes['/api/status']['PUT'] = 'status/put.php';
$routes['/api/status']['DELETE'] = 'status/delete.php';

//ข้อมูลครู
$routes['/api/teachers']['GET'] = 'teachers/get.php';
$routes['/api/teachers']['POST'] = 'teachers/post.php';
$routes['/api/teachers']['PUT'] = 'teachers/put.php';
$routes['/api/teachers']['DELETE'] = 'teachers/delete.php';