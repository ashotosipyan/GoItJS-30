import { USERNAME_KEY } from "./constants";

class LocalStorageWrapper {
  checkUser() {
    try {
      const isUserExists = localStorage.getItem(USERNAME_KEY);

      return isUserExists ? isUserExists : false;
    } catch (error) {
      console.error(error);
    }
  }
  addUser(userName) {
    try {
      localStorage.setItem(USERNAME_KEY, userName);
    } catch (error) {
      console.error(error);
    }
  }

  removeUser() {}
}

export default LocalStorageWrapper;
