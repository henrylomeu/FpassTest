import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, Character } from '../../services/api';
import { Container, Title, SearchFormContainer, SearchInput, SearchButton } from './NameStyles';

const Name: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Character[]>([]);

  const handleSearch = async (searchTerm: string) => {
    const results = await api(searchTerm);
    setSearchResults(results);
    navigate('/results', { state: { data: results } });
    console.log(searchResults)
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <Container>
      <Title>Search</Title>
      <SearchFormContainer>
        <form onSubmit={handleSubmit}>
          <SearchInput type="text" value={searchTerm} onChange={handleInputChange} placeholder='Ex: A-Bomb (HAS)'/>
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </SearchFormContainer>
    </Container>
  );
};

export default Name;
