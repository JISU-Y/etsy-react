import styled, { css } from 'styled-components';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CartButtonWrapper = styled.div`
  border: none;
  position: relative;
  background: transparent;
  cursor: pointer;
  &:hover .tooltip {
    display: inline-block;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ToolTipWrapper = styled.div`
  display: inline-block;
`;

export const CartToolTipSpan = styled.span`
  font-size: 13px;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 36px;
`;

export const LogoWrapper = styled.span`
  font-size: 30px;
  width: 86px;
  margin-right: 6px;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  border: 2px solid black;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 18px;
`;

export const Input = styled.input`
  background: ${COLORS.backgroundGray};
  padding: 10px 0 10px 20px;
  width: 100%;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  background: ${COLORS.backgroundGray};
  width: 60px;
  border: none;
  cursor: pointer;
  transition: ${TRANSITION.normal};
  &:hover {
    background: ${COLORS.hoverGray};
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 36px;
`;

export const IndicatorLine = styled.div`
  width: 0;
  position: absolute;
  bottom: -2px;
  transform: translateX(-50%);
  border-bottom: 2px solid black;
  transition: ${TRANSITION.slow};
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1400px;
  position: relative;
`;

export const Menu = styled.li<{ index: number }>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  padding: 6px;
  position: relative;
  text-align: center;
  &:first-child,
  &:last-child {
    margin: 0;
  }
  ${({ index }) => css`
    & ~ ${IndicatorLine} {
      width: 0;
      left: ${index * 12.5 + 12.5 / 2}%;
    }
    &:hover ~ ${IndicatorLine} {
      width: 12.5%;
      left: ${index * 12.5 + 12.5 / 2}%;
    }
  `}
`;

export const BorderLine = styled.div`
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  border-bottom: 2px solid ${COLORS.shadowGray};
`;
