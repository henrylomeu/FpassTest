import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
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
  font-size: 34px;
  margin-bottom: 16px;
`;

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  width: 230px;
  height: 25px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  margin: 0 auto; 
`;

export const SearchButton = styled.button`
  width: 250px;
  margin-top: 16px;
  background-color: white; 
  color: black; 
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3b3b3b;
  }
`;
