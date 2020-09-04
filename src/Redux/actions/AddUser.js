import { ADD_USER } from "./types";

export const AddUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
