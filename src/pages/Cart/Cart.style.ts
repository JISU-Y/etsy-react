import styled from 'styled-components';

export const CartContainer = styled.div`
  /* Display & Box Model */
  width: 100%;
  max-width: 1400px;
  padding: 0 36px;
  margin: auto;
  margin-top: 24px;
`;

export const CartHeader = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
`;

export const CartCounts = styled.h1`
  /* Display & Box Model */
  width: fit-content;

  /* Font */
  font-size: 32px;
  font-weight: lighter;
  line-height: 36px;
`;

export const ButtonWrapper = styled.div`
  /* Display & Box Model */
  margin-right: -15px;
`;

export const Span = styled.span`
  /* Font */
  font-size: 16px;
  font-weight: bold;
`;

export const CartWrapper = styled.div`
  /* Display & Box Model */
  display: flex;
`;
