import { UserInfo } from "../data/users";

export type RootStackParamList = {
  Home: undefined;
  UserForm: { user: UserInfo };
  Userlist: undefined;
};