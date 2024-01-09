// async function generateForgotPasswordEmail(resetLink, expirationTime, email) {
//     const subject = "email for forgot password";
//     let html = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Forgot Password</title>
//         </head>
//         <body style="font-family: Arial, sans-serif;">

//             <h2>Forgot Password Request</h2>

//             <p>Hello,</p>

//             <p>We received a request to reset your password. If you did not make this request, please ignore this email.</p>

//             <p>To reset your password, click on the link below:</p>

//             <p><a href="${resetLink}" style="text-decoration: none; padding: 10px 15px; background-color: #4CAF50; color: white; border-radius: 5px; display: inline-block;">Reset Password</a></p>

//             <p>If the above link doesn't work, you can copy and paste the following URL into your browser:</p>

//             <p>${resetLink}</p>

//             <p>This link will expire in ${expirationTime} minutes.</p>

//             <p>Thank you,<br>YourAppName Team</p>

//         </body>
//         </html>
//     `;
//     await emailservice.sendemail(email, subject, html)
// }




