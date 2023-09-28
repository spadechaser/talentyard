import { appAuth } from "../firebase/config";

export async function setPersist() {
  try {
    const currentUser = appAuth().currentUser;
    if (currentUser) {
      await appAuth().setPersistence(appAuth.Auth.Persistence.SESSION);
      return "Persistence set to SESSION.";
    }
    return "No user is signed in.";
  } catch (error) {
    throw new Error(
      `An error occurred while setting persistence: ${error.message}`
    );
  }
}
