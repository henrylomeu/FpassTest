import React from 'react';

export interface SearchFormProps {
  searchTerm: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchTerm,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={onInputChange}
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
