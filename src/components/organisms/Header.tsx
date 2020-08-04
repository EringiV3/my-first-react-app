import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  const [searchWord, setSearchWord] = useState<string>('');
  const onClick = () => {
    history.push('/clothes', { searchWord });
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  return (
    <>
      <div>Header</div>
      <input
        type="search"
        name="q"
        aria-label="Search through site content"
        onChange={onChange}
      />
      <button onClick={onClick}>Search</button>
    </>
  );
};

export default Header;
