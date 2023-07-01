import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Character } from '../../services/api';
import { Container, Title, CharacterContainer, Button, CharacterName, CharacterImage } from './ResultsStyles';

const Results: React.FC = () => {
  const location = useLocation();
  const searchResults: Character[] = location.state?.data || [];

  const handleClick = (character: Character) => {
    localStorage.setItem('hero', JSON.stringify(character));
  };

  return (
    <Container>
      <Title>Search Results</Title>
      {searchResults.map((character: Character) => (
        <CharacterContainer key={character.id}>
          <Link to={`/character/${character.id}`} onClick={() => handleClick(character)}>
            <Button>
              <CharacterName>{character.name}</CharacterName>
              <CharacterImage
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            </Button>
          </Link>
        </CharacterContainer>
      ))}
    </Container>
  );
};

export default Results;
