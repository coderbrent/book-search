import React from 'react';
import HeaderPanel from '../Components/HeaderPanel'
import BookSearchPanel from '../Components/BookSearchPanel'

class Search extends React.Component {
  render() {
    return (
      <>
        <HeaderPanel />
          <BookSearchPanel />
      </>
    );
  }
}

export default Search;
