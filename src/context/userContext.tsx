import React, { ReactNode, createContext, useReducer } from "react";
import { UsersList } from "../data/users";
import { addUser, deleteUser, saveUser } from "../services/userService";
import { Action, State, UserActions, UsersContextType } from "./types";

const INITIAL_STATE: State = { users: UsersList };

export const UsersContext = createContext<UsersContextType | null>(null);

export const UsersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const reducer = (state: State, action: Action) => {
    let updatedUsers;
    switch (action.type) {
      case UserActions.DELETE_USER:
        updatedUsers = deleteUser(state.users, action.payload);
        return { ...state, users: updatedUsers };

      case UserActions.ADD_USER:
        updatedUsers = addUser(state.users, action.payload);
        return { ...state, users: updatedUsers };

      case UserActions.UPDATE_USER:
        updatedUsers = saveUser(state.users, action.payload);
        return { ...state, users: updatedUsers };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
