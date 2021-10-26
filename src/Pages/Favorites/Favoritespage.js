import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import style from './Favoritespage.module.css';

const Favoritespage = () => {
  const auth = getAuth();
  const { isLoggedin } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Wanneer er een user is ingelogd, haal dan de data uit firebase om last visited en favorieten op te halen
    const docRef = doc(db, 'users', auth.currentUser.uid);
    const docSnap = getDoc(docRef);

    docSnap.then((docSnap) => {
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setUserData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    });

    return () => {};
  }, [isLoggedin]);

  return (
    <div>
      <div>Favorieten</div>
      {userData.Favorites &&
        userData.Favorites.map((favo) => <div key={favo}>{favo}</div>)}
      <div>Last Visited</div>
      {userData.Lastvisit &&
        userData.Lastvisit.map((visit) => <div key={visit}>{visit}</div>)}
    </div>
  );
};

export default Favoritespage;
