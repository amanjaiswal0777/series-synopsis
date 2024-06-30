import { useState } from 'react';
import styled from 'styled-components';

import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './shows/CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr(); // isme vo naam h jo type kr re h
  const [searchOptn, setSearchOptn] = useState('shows'); // isme radio ki info h

  
  const onSubmit = ev => {// on submiting it , it calls onsearch which is basically providing info in home that the name of series with seelcected option
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOptn,
    };

    onSearch(options); //this is function calling with 
    setSearchStr('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <SearchInput
          placeholder="Search"
          type="text"
          value={searchStr}
          onChange={(ev)=> setSearchStr(ev.target.value)}
        />{' '}
        <RadiosWrapper>
          <CustomRadio
            label="Shows"
            name="search-option"
            value="shows"
            checked={searchOptn === 'shows'}
            onChange={(ev)=> setSearchOptn(ev.target.value)}
          />
          <CustomRadio
            label="Actors"
            name="search-option"
            value="actors"
            checked={searchOptn === 'actors'}
            onChange={(ev)=> setSearchOptn(ev.target.value)}
          />
        </RadiosWrapper>
        {/*value here specify two way data binding*/}
        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  color:white;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
  font-size: 1.01rem;
    margin: 0 15px;
        text-shadow: -3px 1px 3px black;
  }
    
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: #198754;
    margin: auto;
    text-transform: uppercase;
    font-weight: 500;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
