module.exports = {
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: "3306",
  database: "heroku_3a959d1095bb563",
  define: {
    timestamps: false,
    underscored: true,
  },
};
