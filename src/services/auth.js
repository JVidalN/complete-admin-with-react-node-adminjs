import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => bcrypt.hash(password, 8);

export const checkPassword = async (user, password) =>
  bcrypt.compare(password, user.password_hash);

export const hasAdminPermission = (currentUser) =>
  currentUser && currentUser.role === "admin";
export const hasManagerPermission = (currentUser) =>
  currentUser && ["admin", "manager"].includes(currentUser.role);
export const hasDeveloperPermission = (currentUser) =>
  currentUser && ["admin", "manager", "developer"].includes(currentUser.role);
