// Aqui ficam as funções de CRUD, exportadas para as rotas individuais

import { Request, Response } from 'express';
import { User } from '../entity/User';

export const createUser = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    maritalStatus,
    plan,
    password,
    createdAt,
    updatedAt,
  } = req.body;
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.maritalStatus = maritalStatus;
  user.plan = plan;
  user.password = password;
  user.createdAt = createdAt;
  user.updatedAt = updatedAt;

  await user.save();
  return res.json(user);
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
