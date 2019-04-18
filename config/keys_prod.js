module.exports = {
  mongoURI: process.env.MONGOURI,
  jwtSecret: process.env.JWTSECRET,
  vapidPublic: process.env.VAPID_PUBLIC,
  vapidPrivate: process.env.VAPID_PRIVATE,
  sendGridUser: process.env.SENDGRID_USER,
  sendGridPass: process.env.SENDGRID_PASS
};
