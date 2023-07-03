import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Character } from '../../services/api';
import Pagination from '../../components/Pagination/Pagination'
import { Container, Title, CharacterContainer, Button, CharacterName, CharacterImage } from './ResultsStyles';

const Results: React.FC = () => {
  const location = useLocation();
  const searchResults: Character[] = location.state?.data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const heroesPerPage = 6;

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = searchResults.slice(indexOfFirstHero, indexOfLastHero);

  const handleClick = (character: Character) => {
    localStorage.setItem('hero', JSON.stringify(character));
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Title>Search Results</Title>
      {currentHeroes.length === 0 ? (
        <Title>No results found</Title>
      ) : (
        <>
          {currentHeroes.map((character: Character) => (
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
          <Pagination
            heroesPerPage={heroesPerPage}
            totalHeroes={searchResults.length}
            paginate={paginate}
          />
        </>
      )}
    </Container>
  );
};

export default Results;
