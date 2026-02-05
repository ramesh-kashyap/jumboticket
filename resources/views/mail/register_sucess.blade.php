<!DOCTYPE html>
<html>
<head>
  <title>Welcome to Helix Fund</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
          <tr>
            <td style="background-color:#000; padding:20px; text-align:center;">
             <img src="https://helixfund.live/assets/images/logo1.png" style="width:200px;height:100px">
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <p style="font-size:16px; color:#333333; line-height:1.6;">
                Hello <strong>{{ $view_message['name'] }}</strong>,
              </p>
              <p style="font-size:16px; color:#333333; line-height:1.6;">
                🎉 Thank you for registering with <strong>Helix Fund</strong> — the future of smart auto trading!
              </p>
              <p style="font-size:16px; color:#333333; line-height:1.6;">
                You're now part of a growing community that's earning daily through AI-powered trading. Your account has been created successfully, and you're ready to start your journey toward financial freedom.
              </p>

              <p style="font-size:16px; color:#333333; margin:20px 0;">
                ➤ <strong>Username:</strong>  {{ $view_message['username'] }}<br>
                ➤ <strong>Email:</strong>  {{ $view_message['email'] }}<br>
                ➤ <strong>Password:</strong>  {{ $view_message['password'] }}
              </p>

              <p style="font-size:16px; color:#333333; line-height:1.6;">
                Click below to log in and activate your first trading package:
              </p>

              <div style="text-align:center; margin:30px 0;">
                <a href="https://helixfund.live/login" style="background-color:#1e88e5; color:#ffffff; padding:12px 25px; border-radius:5px; text-decoration:none; font-weight:bold;">Login to Your Account</a>
              </div>

              <p style="font-size:14px; color:#888888;">
                Need help? Our support team is here for you 24/7.
              </p>
              <p style="font-size:14px; color:#888888;">
                Welcome aboard, and let’s grow together 🚀
              </p>
              <p style="font-size:14px; color:#888888;">– The Helix Fund Team</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f0f0f0; padding:15px; text-align:center; font-size:12px; color:#999999;">
              © 2025 Helix Fund. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>