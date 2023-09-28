// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;
// // const nodemailer = require('nodemailer');

const { link } = require("fs");

// const credentials = {
//     "client_id": "201132518044-uv5qfvs8hjjpdgdo3snjpq8rvu91tbpu.apps.googleusercontent.com",
//     "project_id": "portfolio-400215",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_secret": "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",
//     "redirect_uri": "http://localhost/5500"
// };

// const { client_secret, client_id, redirect_uri } = credentials;
// const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

// const GMAIL_SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// const url = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     prompt: 'consent',
//     scope: GMAIL_SCOPES,
// });

// console.log('Authorize this app by visiting this url:', url);

// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;
// const nodemailer = require('nodemailer');

// const CLIENT_ID = '201132518044-uv5qfvs8hjjpdgdo3snjpq8rvu91tbpu.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'http://localhost/5500';

// const oauth2Client = new OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// );

// oauth2Client.setCredentials({
//     refresh_token: 'YOUR_REFRESH_TOKEN'
// });

// const accessToken = oauth2Client.getAccessToken();

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         user: 'your_email@gmail.com',
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: 'YOUR_REFRESH_TOKEN',
//         accessToken: accessToken,
//     },
// });

// const mailOptions = {
//     from: 'mayanky975@gmail.com',
//     subject: 'Hire me',
//     text: 'Message Text',
// };

// document.getElementById('mail').addEventListener("click",
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     }));

// document.getElementById("download").addEventListener("click", {
//     try {
//         const response = await fetch("assests/doc/Resume.pdf");
//         const download = await response.blob();
//         const link = document.createElement("a");
//         link.href = URL.createObjectURL(download);
//         link.click();
//     } catch (error) {
//         console.log(error.message);
//     }
// })