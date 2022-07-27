import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

router.get("/courses", ensureAuthenticated, (_request, response) => {
  return response.json([
    { id: 1, name: "Node JS" },
    { id: 2, name: "React JS" },
    { id: 3, name: "React Native" },
    { id: 4, name: "Vue JS" },
    { id: 5, name: "Next JS" },
    { id: 6, name: "PL/SQL" },
    { id: 7, name: "Oracle Responsys" },
    { id: 8, name: "HTML/CSS" },
    { id: 9, name: "Flutter" },
  ]);
});

export { router };
