import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Button, Icon } from "@rneui/base";
import { UsersProvider } from "../context/userContext";
import UserForm from "../views/userForm";
import UserList from "../views/userList";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
const Routes: React.FC = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Userlist"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="Userlist"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Users list",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{ title: "User forms" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

export default Routes;
