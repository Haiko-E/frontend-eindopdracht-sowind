//REACT
import React from 'react';

//COMPONENTS
import Result from '../../components/Result/Result';

const SearchResultpage = ({ searchResult, setSpot }) => {
  return (
    <div>
      {searchResult &&
        searchResult.data.suggestions.spot.map((kitespot, index) => {
          return (
            <Result
              key={kitespot.id}
              kitespot={kitespot}
              index={index}
              setSpot={setSpot}
            />
          );
        })}
    </div>
  );
};

export default SearchResultpage;
