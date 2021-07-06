module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  url: env('STRAPI_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
