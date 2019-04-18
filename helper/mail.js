const nodemailer = require("nodemailer");
const { sendGridPass, sendGridUser } = require("../config/keys");

exports.sendConfirmationEmail = user => {
  const emailHTML = `
    <html>
    <head>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        body {
          width: 100% !important;
          height: 100vh;
          padding: 40px 0;
          background-color: white !important;
          box-sizing: border-box !important;
          display: flex;
          align-items: center;
          justify-content: center;
        
        }
        .container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          width: 400px;
          padding: 50px 34px; 
          border-radius: 12px;
          background-color: #2ECC71;
          color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        p {
          width: 100% !important;
        }
        h1 {
          width: 100% !important;
          padding: 6px 0;
          font-size: 1.7em;
        }
        ul {
          margin: 12px 0;
          text-align: center;
          list-style-type: none;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Account Created Succesfully</h1>
        <p>You have succesfully registered to linklib</p>
        <ul>
          <li><img src="${user.avatar}" /></li>
          <li>Username: ${user.username}</li>
          <li>Email: ${user.email}</li>
        </ul>
      </div>
    </body>
  </html>`;
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: sendGridUser,
      pass: sendGridPass
    }
  });
  const email = {
    from: '"Linklib Account verification" <sanoofp7@gmail.com>',
    to: user.email,
    subject: "Linklib Account Created",
    text: `${user.username}, You are registered to Linklib`,
    html: emailHTML
  };
  transporter.sendMail(email).then(info => {
    console.log(info)
    return true;
  });
};
