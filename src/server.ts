import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    return response.json({
      status: "Error",
      message: error.message,
    });
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
