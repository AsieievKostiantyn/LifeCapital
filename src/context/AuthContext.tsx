import { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { auth, db } from '../service/firebase';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { AuthContext } from './useAuth';

export interface UserData {
  displayName: string;
  role: string;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        const localDataKey = `userData-${firebaseUser.uid}`;
        const cachedData = localStorage.getItem(localDataKey);

        if (cachedData) {
          setUserData(JSON.parse(cachedData));
        } else {
          try {
            const docRef = doc(db, 'users', firebaseUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              const userData = docSnap.data();
              localStorage.setItem(
                localDataKey,
                JSON.stringify({
                  displayName: userData.displayName,
                  role: userData.role,
                })
              );
              setUserData({
                displayName: userData.displayName,
                role: userData.role,
              });
            }
          } catch (error) {
            console.error('Помилка при завантаженні даних користувача:', error);
          }
        }
      } else {
        setUserData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (auth.currentUser?.uid) {
      const localDataKey = `userData-${auth.currentUser?.uid}`;
      localStorage.removeItem(localDataKey);
    }
    await signOut(auth);
  };

  const register = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, 'users', userCredential.user.uid), {
      uid: userCredential.user.uid,
      email,
      displayName,
      role: 'player',
      createdAt: serverTimestamp(),
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        loading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
