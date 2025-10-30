<?php
// PHPMailer (cần copy thư mục PHPMailer vào chung thư mục với file này!)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

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
    $from = 'Longthanhphat.store@gmail.com';
    $fromName = $input['fromName'] ?? 'Long Thanh Phat Shop';
    $subject = $input['subject'] ?? 'Thông báo từ Long Thanh Phat Shop';
    $message = $input['message'] ?? '';
    $isHtml = $input['isHtml'] ?? true;
    $cc = $input['cc'] ?? '';
    $bcc = $input['bcc'] ?? '';
    
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'Longthanhphat.store@gmail.com';
        $mail->Password   = 'fpvd zdgn bulx ogkd'; // Khuyến nghị bạn nên dùng App Password thay vì mật khẩu Gmail chính thức!
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        //Recipients
        $mail->setFrom($from, $fromName);
        $mail->addAddress($to, $toName);

        // Thêm CC nếu có
        if (!empty($cc)) {
            if (is_array($cc)) {
                foreach ($cc as $c) {
                    $mail->addCC($c);
                }
            } else {
                $mail->addCC($cc);
            }
        }

        // Thêm BCC nếu có
        if (!empty($bcc)) {
            if (is_array($bcc)) {
                foreach ($bcc as $b) {
                    $mail->addBCC($b);
                }
            } else {
                $mail->addBCC($bcc);
            }
        }
        // Chỉ add BCC nếu mail không gửi trực tiếp về shop
        // if (strtolower($to) !== 'longthanhphat.store@gmail.com') {
        //     $mail->addBCC('Longthanhphat.store@gmail.com');
        // }

        if (
            strtolower($to) !== 'longthanhphat.store@gmail.com'
            && (strpos(strtolower($subject), 'xác nhận đơn hàng') === false)
        ) {
            $mail->addBCC('Longthanhphat.store@gmail.com');
        }

        // Nội dung
        $mail->isHTML($isHtml);
        $mail->Subject = $subject;
        $mail->Body    = $isHtml ? ("<html><head><meta charset='UTF-8'></head><body>$message</body></html>") : $message;
        $mail->AltBody = strip_tags($message);

        $mail->send();
        $response = [
            'success' => true,
            'message' => 'Email sent successfully via Gmail SMTP',
            'to' => $to,
            'cc' => $cc,
            'bcc' => $bcc
        ];
    } catch (Exception $e) {
        $response = [
            'success' => false,
            'message' => 'Message could not be sent. Error: ' . $mail->ErrorInfo
        ];
    }
} else {
    $response['message'] = 'Only POST requests allowed';
}
echo json_encode($response);
?>
