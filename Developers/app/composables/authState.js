import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export const observeUserAuthState = (userCallback, errorCallBack) => {
  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        userCallback(user);
      } else {
        userCallback(null);
      }
    },
    (error) => errorCallBack("observeUserAuthState: ", error)
  );
};
