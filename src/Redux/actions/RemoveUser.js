import { REMOVE_USER } from "./types";

export const RemoveUser = (user) => {
  return {
    type: REMOVE_USER,
    payload: user,
  };
};
