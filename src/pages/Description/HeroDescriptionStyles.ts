import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  width: 300px;
  background-color: black;
  border: none;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const HeroImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 18px;
`;

export const NoDescription = styled.p`
  font-style: italic;
  color: gray;
`;
