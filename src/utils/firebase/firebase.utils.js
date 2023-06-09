// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  where,
  updateDoc,
  arrayRemove,
  arrayUnion,
  collectionGroup,
} from "firebase/firestore";
import { getDatabase, ref, child, push, update } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(app);

// Add documents to Firebase from file
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
// Retreive data from Firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const updateDatabaseStock = async (cartItems) => {
  cartItems.map(async (cartItem) => {
    const itemCat =
      cartItem.itemCategoy.charAt(0).toUpperCase() +
      cartItem.itemCategoy.slice(1);
    const collectionRef = doc(db, "categories", itemCat.toLowerCase());

    const m = await getDocsFromCategory(itemCat);
    const item = m[0].items.filter((i) => i.id === cartItem.id)[0];

    await updateDoc(collectionRef, {
      items: arrayRemove(item),
    });
    console.log("item removed");
    item.stock = item.stock - cartItem.quantity;

    await updateDoc(collectionRef, {
      items: arrayUnion(item),
    });
    console.log("item added");
  });
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalDetails = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const { displayName } = additionalDetails;

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalDetails,
      });
      const userSnapShot = await getDoc(userDocRef);
      return userSnapShot;
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userSnapShot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getUserDisplayName = async (userID) => {
  const userDocRef = doc(db, "users", userID);
  const userSnapShot = await getDoc(userDocRef);
  return userSnapShot.data().displayName;
};

export const getDocsFromCategory = async (category) => {
  const q = query(
    collection(db, "categories"),
    where("title", "==", `${category}`)
  );

  const querySnapshot = await getDocs(q);
  const catMap = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  return catMap;
};

export const getItemCategory = (id) => {
  if (id <= 1999) {
    return "wax";
  } else if (id <= 2999) {
    return "seasonal";
  } else if (id <= 3999) {
    return "jelly";
  } else if (id <= 4999) {
    return "woodwick";
  }
};
