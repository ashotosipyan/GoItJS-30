import { USER_DATA_FLAG } from "./constants";

class LocalStorageWrapper {
  checkUserData() {
    try {
      const isUserDataExists = localStorage.getItem(USER_DATA_FLAG);
      console.log(isUserDataExists);
      return isUserDataExists ? true : false;
    } catch (error) {
      console.error(error);
    }
  }
  setUserData() {
    try {
      localStorage.setItem(USER_DATA_FLAG, true);
    } catch (error) {
      console.error(error);
    }
  }
}

export default LocalStorageWrapper;
