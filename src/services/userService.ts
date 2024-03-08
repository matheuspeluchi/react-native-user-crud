import { UserInfo } from "../data/users";

export const saveUser = (userList: UserInfo[], newUser: UserInfo):UserInfo[] => {
  const newUsers = [...userList];
  const idx = newUsers.findIndex(user => user.id === newUser.id);
  if (idx >=0){
    newUsers[idx] = {...newUser};
  }

  return newUsers;
};


export const addUser = (userList:UserInfo[], user: UserInfo):UserInfo[] =>{
  const newUser = {...user, id: userList.length + 1}
  return [...userList, newUser]

}

export const deleteUser = (userList: UserInfo[], id: number):UserInfo[] => {
  const newUsers = userList.filter((user) => user.id !== id);
  return [...newUsers]
};

export const getUser = (userList: UserInfo[], id: number): UserInfo | null => {
  const idx = userList.findIndex((user) => user.id === id);
  if (idx >= 0) {
    return {...userList[idx]};
  }
  return null;
};