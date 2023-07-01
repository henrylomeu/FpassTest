import React from 'react';
import {Wrapper,Title,HeroImage,Description,NoDescription} from './HeroDescriptionStyles'

const HeroDescription: React.FC = () => {
  const heroDetailsString = localStorage.getItem('hero');
  const heroDetails = heroDetailsString !== null ? JSON.parse(heroDetailsString) : null;

  if (!heroDetails) {
    return <Wrapper>No hero details found.</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>{heroDetails.name}</Title>
      <HeroImage src={`${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`} alt={heroDetails.name} />
      {heroDetails.description ? (
        <Description>{heroDetails.description}</Description>
      ) : (
        <NoDescription>No description found</NoDescription>
      )}
    </Wrapper>
  );
};

export default HeroDescription;
