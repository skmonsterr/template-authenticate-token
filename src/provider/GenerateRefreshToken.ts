import dayjs from "dayjs";
import { client } from "../prisma/client";

class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(15, "second").unix();

    return client.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });
  }
}

export { GenerateRefreshToken };
