
export default {
  PORT: process.env.PORT || 4000,
  MONGO_URL: process.env.MONGO_URL,
  SESSION_SECRET: process.env.SESSION_SECRET || "secret",
  JWT_SECRET: process.env.JWT_SECRET || "secret"
}
