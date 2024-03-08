import { NavigationProp } from "@react-navigation/native";
import { useContext } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import User from "../../components/user";
import UsersContext from "../../context/userContext";
import { UserInfo } from "../../data/users";
import { UserActions, UsersContextType } from "../../context/types";

interface UserLisProps {
  navigation: NavigationProp<any>;
}

const UserList: React.FC<UserLisProps> = ({ navigation }) => {
  const { state, dispatch } = useContext(UsersContext) as UsersContextType;
  const getUserItem = ({ item: user }: ListRenderItemInfo<UserInfo>) => {
    return (
      <User
        user={user}
        editUser={() => navigation.navigate("UserForm", user)}
        action={() => navigation.navigate("UserForm", user)}
        deleteUser={() => deleteUser(user.id)}
      />
    );
  };

  const deleteUser = (id: number) => {
    dispatch({
      type: UserActions.DELETE_USER,
      payload: id,
    });
  };
  return (
    <FlatList
      keyExtractor={(user) => user.id.toString()}
      data={state.users}
      renderItem={getUserItem}
    />
  );
};

export default UserList;
