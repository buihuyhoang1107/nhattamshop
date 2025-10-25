<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$response = ['success' => false, 'message' => 'Unknown error'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        $response['message'] = 'Invalid JSON input: ' . json_last_error_msg();
        echo json_encode($response);
        exit();
    }
    
    $to = $input['to'] ?? '';
    $toName = $input['toName'] ?? '';
    $from = $input['from'] ?? 'admin@longthanhphat.store';
    $fromName = $input['fromName'] ?? 'Long Thanh Phat Shop';
    $subject = $input['subject'] ?? 'Thông báo từ Long Thanh Phat Shop';
    $message = $input['message'] ?? '';
    $isHtml = $input['isHtml'] ?? true;
    
    try {
        // Use PHP mail() function
        $headers = "From: $fromName <$from>\r\n";
        $headers .= "Reply-To: $from\r\n";
        $headers .= "Content-Type: " . ($isHtml ? "text/html" : "text/plain") . "; charset=UTF-8\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        
        if ($isHtml) {
            $full_message = "
            <html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                $message
            </body>
            </html>
            ";
        } else {
            $full_message = $message;
        }
        
        // Send email
        if (mail($to, $subject, $full_message, $headers)) {
            $response = [
                'success' => true,
                'message' => 'Email sent successfully',
                'messageId' => 'PHP_' . time()
            ];
        } else {
            throw new Exception('mail() function failed');
        }
        
    } catch (Exception $e) {
        $response = [
            'success' => false,
            'message' => 'Failed to send email',
            'error' => $e->getMessage()
        ];
    }
} else {
    $response['message'] = 'Only POST requests allowed';
}

echo json_encode($response);
?>
