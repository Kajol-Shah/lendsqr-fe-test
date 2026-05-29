import users from "../mock/users.json";

export const getUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500);
  });
};