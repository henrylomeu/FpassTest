import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
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
  width: 300px;
  height: 25px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const SearchButton = styled.button`
  width: 300px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3b3b3b;
  }
`;
