import {
  createUserService,
  updateUserService,
  deleteUserService,
  getUserService,
} from "../services/user.service.js";

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getUsers = async (req, res) => {
  const users = await getUserService()
  res.json(users)
};

export const updateUser = async (req, res) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await deleteUserService(req.params.id);
    res.json({ message: "User deleted", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
