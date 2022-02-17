import firebase from "./FirebaseConfig";

const auth = firebase.auth();

const loginAdmin = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

const logoutAdmin = () => {
  return auth.signOut();
};

const sendPasswordResetEmail = (email) => {
  return auth.sendPasswordResetEmail(email);
};

const subscribeToAuthChanges = (handleAuthChange) => {
  auth.onAuthStateChanged((admin) => {
    handleAuthChange(admin);
  });
};

const FirebaseAuthService = {
  loginAdmin,
  logoutAdmin,
  sendPasswordResetEmail,
  subscribeToAuthChanges,
};

export default FirebaseAuthService;
