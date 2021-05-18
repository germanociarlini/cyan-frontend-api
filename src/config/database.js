module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "admin",
  password: "root",
  database: "geolocdb",
  define: {
    timestamps: true, // created_at, updated_at
    underscored: true, // snake_case
  },
};
