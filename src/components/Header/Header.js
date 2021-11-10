//REACT
import React, { useState, useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

//STYLE
import styles from './Header.module.css';

//ICONS
import Logo from '../../assets/Slice 1.svg';
import backarrow from '../../assets/Back arrow.svg';

//AXIOS
import axios from 'axios';

const Header = ({ setSearchResult, spot, setSpot }) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const { isLoggedin } = useContext(AuthContext);

  // update local state
  function onChangeHandler(e) {
    setSearchValue(e.target.value);
  }

  // voert de zoekfunctie uit en push data naar App.js state
  function onSubmitHandler(e) {
    e.preventDefault();

    async function fetchData() {
      try {
        const result = await axios.get(
          `https://api-windfinder-pro.p.rapidapi.com/search/autocomplete/en/${searchValue}`,
          {
            headers: {
              'x-rapidapi-host': 'api-windfinder-pro.p.rapidapi.com',
              'x-rapidapi-key': '50dc06e1ffmsh74e7f780ffadcaep185a7ajsnff0dcef58db6',
            },
          }
        );
        console.log(result.data);

        setSearchResult(result);
        history.push(`/searchresult/${searchValue}`);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }

  if (spot && isLoggedin) {
    return (
      <div className={`${styles.header} ${styles.header2}`}>
        <header>
          <Link to={`/`}>
            <img src={backarrow} alt='back' onClick={() => setSpot(null)} />
          </Link>
          <h2>{spot.n}</h2>
        </header>
        <section>
          <NavLink
            activeClassName={styles['active-link']}
            to={`/weatherinfo/${spot.kw}`}
          >
            Weer info
          </NavLink>
          <NavLink
            activeClassName={styles['active-link']}
            to={`/spotinfo/${spot.kw}`}
          >
            Spot info
          </NavLink>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>

      <div className={styles.searchbar}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor='search'></label>
          <input
            onChange={onChangeHandler}
            value={searchValue}
            type='text'
            name='search'
            id='search'
            placeholder='Search'
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
