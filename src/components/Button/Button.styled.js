import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background-color: #a1d6e2;

  &:hover,
  &:focus {
    color: black;
    background-color: #1995ad;
  }
`;
