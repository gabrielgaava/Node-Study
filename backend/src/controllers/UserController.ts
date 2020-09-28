import { Request, Response } from "express";
import EmailService from "../services/EmailService";

// Fake data
const users = [{ name: "Gabriel Gava", email: "nero.gava@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "Gabriel Gava", email: "nero.gava@gmail.com" },
      message: { body: "Sem bem-vindo!", subject: "Contra criada" },
    });

    return res.send("Conta cadastrada com sucesso");
  },
};
