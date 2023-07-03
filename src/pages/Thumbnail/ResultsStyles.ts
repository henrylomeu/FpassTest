import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  background-color: black;
  width: 280px;
  padding: 10px;
  border-radius: 4px;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: black;
  border: none;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const CharacterName = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-right: 8px;
  margin-left: 8px;
`;


