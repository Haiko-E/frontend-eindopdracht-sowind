//REACT
import React, { useEffect, useState } from 'react';

//STYLING
import styles from '../../Pages/Searchresultspage/SearchResultpage.module.css';

//ICON STARS
import star from '../../assets/Star.svg';
import starn from '../../assets/Star-n.svg';

//FIREBASE
import { doc, updateDoc, getDoc, arrayRemove, arrayUnion } from 'firebase/firestore';
import { db } from '../../Firebase';
import { getAuth } from 'firebase/auth';

const Favorite = ({ kitespot }) => {
  const [favorite, setFavorite] = useState(false);
  const auth = getAuth();
  const docRef = doc(db, 'users', auth.currentUser.uid);

  async function clickHandler(e) {
    const isFavorite = await checkerIfFav(kitespot.n);

    if (isFavorite) {
      await updateDoc(docRef, {
        Favorite: arrayRemove(kitespot),
      });
      e.target.src = starn;
    } else {
      await updateDoc(docRef, {
        Favorite: arrayUnion(kitespot),
      });
      e.target.src = star;
    }
  }

  async function checkerIfFav(spot) {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const Favo = docSnap.data().Favorite;
      const result = Favo.map((fav) => fav.n);
      return result.includes(spot);
    } else {
      console.log('No such document!');
    }
  }

  useEffect(() => {
    checkerIfFav(kitespot.n).then((data) => {
      setFavorite(data);
    });
  }, []);

  return (
    <img
      className={styles.star}
      onClick={clickHandler}
      src={favorite ? star : starn}
      alt='star'
    />
  );
};

export default Favorite;
