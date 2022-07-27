import { sign } from "jsonwebtoken";
require("dotenv").config();

class GenerateTokenProvider {
  async execute(userId: string) {
    return sign({}, process.env.SECRET_TOKEN, {
      subject: userId,
      expiresIn: "20s",
    });
  }
}

export { GenerateTokenProvider };
