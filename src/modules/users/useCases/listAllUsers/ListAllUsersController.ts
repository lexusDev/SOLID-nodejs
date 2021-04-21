import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    let all: User[] = [];

    try {
      all = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.json(all);
  }
}

export { ListAllUsersController };
