import React from "react";
import { UserInfo } from "../../data/users";
import { Avatar, Button, Icon, ListItem } from "@rneui/base";

import { styles } from "./styles";
import { Alert } from "react-native";
interface UserProps {
  user: UserInfo;
  editUser?: () => void;
  action?: () => void;
  deleteUser?: () => void;
}

const User: React.FC<UserProps> = ({
  user,
  editUser,
  action,
  deleteUser = () => console.warn("Method not implemented"),
}) => {
  const confirmDeleteUser = () => {
    Alert.alert("Delete user", `Do you want to delete the user ${user.name}?`, [
      {
        text: "Yes",
        onPress() {
          deleteUser();
        },
      },
      {
        text: "No",
      },
    ]);
  };
  return (
    <>
      <ListItem bottomDivider onPress={action}>
        <Avatar rounded source={{ uri: user.avatarUrl }} />

        <ListItem.Content>
          <ListItem.Title style={styles.title}>{user.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle}>
            {user.email}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Button
          onPress={editUser}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmDeleteUser()}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </ListItem>
    </>
  );
};

export default User;
