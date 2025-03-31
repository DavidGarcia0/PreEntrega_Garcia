
export default {
  PORT: process.env.PORT || 4000,
  MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://davidgarciaf0404:0T3WIaUO33fO0vHR@cluster0.kojjgtt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  SESSION_SECRET: process.env.SESSION_SECRET || "secret",
  JWT_SECRET: process.env.JWT_SECRET || "secret"
}