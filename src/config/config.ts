export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    name: process.env.DB_NAME,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
  },
  ai: {
    cohere_key: process.env.AI_SECRET,
  },
});
