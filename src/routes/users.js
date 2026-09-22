import { Router } from "express";

const router = Router();

//GET /api/users
//O prefixo /api sera incluído na importação do módulo
router.get("/", async () => {
  throw new Error("Banco não conectado");
});

export default router;
