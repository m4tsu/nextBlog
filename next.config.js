require("dotenv").config();
module.exports = {
  env: {
      x_api_url: process.env.X_API_URL,
      x_api_key: process.env.X_API_KEY
  }
}