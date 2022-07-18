module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88a21542b3ac837240b44b5c964bce03'),
  },
});
