//REACT
import React, { useEffect, useState } from 'react';

//STYLE
import style from './Favoritespage.module.css';

//COMP
import Result from '../../components/Result/Result';

//FIREBASE
import { getAuth } from 'firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';

const Favoritespage = ({ setSpot }) => {
  const auth = getAuth();
  const [userData, setUserData] = useState({});
  const [loading, setloading] = useState(true);
  const docRef = doc(db, 'users', auth.currentUser.uid);
  const docSnap = getDoc(docRef);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setUserData(doc.data());
    });

    if (auth.currentUser) {
      // Wanneer er een user is ingelogd, haal dan de data uit firebase om last visited en favorieten op te halen
      docSnap
        .then((docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        })
        .then(() => setloading(false));
    }
  }, []);

  // wanneer loading, return loading div
  if (loading) {
    return <div>Loading...</div>;
  }

  // return na loading
  return (
    <div className={style.favoritecontainer}>
      <h3>Favorieten</h3>

      {userData.Favorite &&
        userData.Favorite.map((favo, index) => (
          <Result key={favo.id} kitespot={favo} index={index} setSpot={setSpot} />
        ))}
      <h3>Last Visited</h3>
      {userData.Lastvisit &&
        userData.Lastvisit.map((visit) => <h5 key={visit}>{visit}</h5>)}
    </div>
  );
};

export default Favoritespage;
