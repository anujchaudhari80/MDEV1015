import auth from '@react-native-firebase/auth';

export function signUpUser(username, password): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export function loginInAsync(username, password) {
  return auth().signInWithEmailAndPassword(username, password);
}