<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>OTP Verification</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
  <div style="max-width: 400px; margin: auto; background: #fff; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    
    <h2 style="color: #333;">Your OTP Code</h2>
    
    <p style="font-size: 16px; color: #666;">Use the code below to verify your account:</p>
    
    <div style="font-size: 28px; font-weight: bold; margin: 20px 0; color: #1e90ff;">
      {{ $view_message['code'] }}
    </div>

    <p style="font-size: 14px; color: #999;">This code is valid for a limited time. Please do not share it with anyone.</p>

    <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">

    <p style="font-size: 14px; color: #aaa;">Thank you,<br><strong>{{siteName()}} Team</strong></p>
  
  </div>
</body>
</html>