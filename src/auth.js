import firebase from './firebase';
import store from './store';
import db from './db';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.user) {
      user = user.user;
    }
    const setUser = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }

    db.collection('users').doc(setUser.id).set(setUser);
    store.commit('auth/setUser', setUser);
  } else {
    // no user is signed in
    store.commit('auth/setUser', null);
  }
})
