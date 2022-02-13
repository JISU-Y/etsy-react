import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;
  width: 250px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid lightgray;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  }
`;

export const CategoryImg = styled.img`
  width: 250px;
  height: 200px;
`;

export const CategoryTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding: 28px 0;
  text-align: center;
`;
