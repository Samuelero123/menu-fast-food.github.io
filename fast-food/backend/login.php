<?php
session_start();

$correctPasswordHash = '$2y$10$9DUVZphkJJtzE0qEwdpPt.xsMwnAa25Swql3XKNnYYNZ8eGHlHbfS';

header('Content-Type: application/json');

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody, true);
$password = is_array($data) ? (string)($data['password'] ?? '') : '';

if (!password_verify($password, $correctPasswordHash)) {
  http_response_code(401);
  echo json_encode(['message' => 'Contraseña incorrecta.']);
  exit;
}

$_SESSION['admin_logged_in'] = true;
echo json_encode(['message' => 'ok']);
