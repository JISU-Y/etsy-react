import styled from 'styled-components';

export const CardImgBox = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 50%;
  margin: 12px 0;
  transform: scale(1);
  transition: transform 0.2s;
  box-shadow: 0 4px 18px rgba(34, 34, 34, 0.2);
  overflow: hidden;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  padding-bottom: 10px;
  border-bottom: solid 2px transparent;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 114px;
  cursor: pointer;
  &:hover ${CardImgBox} {
    transform: scale(1.08);
  }
  &:hover ${CardTitle} {
    color: gray;
    border-bottom: solid 2px gray;
  }
`;
