import { Dispatch } from "react";
import { UserInfo } from "../data/users";

export enum UserActions {
  DELETE_USER = "deleteUser",
  UPDATE_USER = "updateUser",
  ADD_USER = "addUser"
}

export interface Action {
  type: UserActions,
  payload: any
}


export type UsersContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};


export type State = {
  users: UserInfo[];
};