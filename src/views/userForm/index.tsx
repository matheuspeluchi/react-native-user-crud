import { NavigationProp, Route, RouteProp } from "@react-navigation/native";
import { Button, Input } from "@rneui/base";
import { useContext, useState } from "react";
import { View } from "react-native";
import { UserInfo } from "../../data/users";
import { styles } from "./styles";
import UsersContext from "../../context/userContext";
import { UserActions, UsersContextType } from "../../context/types";
import { RootStackParamList } from "../../routes/types";

interface Props {
  navigation: NavigationProp<any>;
  route: RouteProp<RootStackParamList, "UserForm">;
}

const UserForm: React.FC<Props> = ({ route, navigation }) => {
  const { user: userInfo } = route.params;
  const [user, setUser] = useState<UserInfo>(userInfo);
  const { dispatch } = useContext(UsersContext) as UsersContextType;

  const save = () => {
    const type = user.id ? UserActions.UPDATE_USER : UserActions.ADD_USER;
    dispatch({ type: UserActions.UPDATE_USER, payload: user });
    navigation.navigate("Userlist");
  };

  return (
    <View style={styles.root}>
      <Input
        label="Name"
        onChangeText={(name) => setUser({ ...user!, name })}
        placeholder="Insert name"
        value={user?.name}
      />
      <Input
        label="Email"
        onChangeText={(email) => setUser({ ...user!, email })}
        placeholder="Insert email"
        value={user?.email}
      />
      <Input
        label="Avatar Uri"
        onChangeText={(avatarUrl) => setUser({ ...user!, avatarUrl })}
        placeholder="Insert uri"
        value={user?.avatarUrl}
      />
      <Button type="solid" size="lg" color="primary" onPress={save}>
        Salvar
      </Button>
    </View>
  );
};

export default UserForm;
