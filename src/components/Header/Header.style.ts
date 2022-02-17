import styled, { css } from 'styled-components';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';

export const HeaderContainer = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CartButtonWrapper = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  background: transparent;
  border: none;

  /* Other */
  cursor: pointer;
  &:hover .tooltip {
    /* Display & Box Model */
    display: inline-block;

    /* Other */
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
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 12px 36px;
`;

export const LogoWrapper = styled.span`
  /* Display & Box Model */
  width: 86px;
  margin-right: 6px;

  /* Text */
  font-size: 30px;
`;

export const SearchForm = styled.form`
  /* Positioning */
  display: flex;
  width: 100%;
  margin-right: 18px;
  border-radius: 50px;
  border: 2px solid black;

  /* Other */
  overflow: hidden;
`;

export const Input = styled.input`
  /* Display & Box Model */
  width: 100%;
  padding: 10px 0 10px 20px;
  border: none;
  outline: none;

  /* Color */
  background: ${COLORS.backgroundGray};
`;

export const SearchButton = styled.button`
  /* Display & Box Model */
  width: 60px;
  border: none;

  /* Color */
  background: ${COLORS.backgroundGray};

  /* Other */
  cursor: pointer;
  transition: ${TRANSITION.normal};
  &:hover {
    background: ${COLORS.hoverGray};
  }
`;

export const MenuContainer = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 36px;
`;

export const IndicatorLine = styled.div`
  /* Positioning */
  position: absolute;
  bottom: -2px;

  /* Display & Box Model */
  width: 0;
  border-bottom: 2px solid black;

  /* Other */
  transform: translateX(-50%);
  transition: ${TRANSITION.slow};
`;

export const MenuList = styled.ul`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
`;

export const Menu = styled.li<{ index: number }>`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  width: 100%;
  height: 100%;
  padding: 6px;

  /* Text */
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  /* Other */
  cursor: pointer;

  &:first-child,
  &:last-child {
    margin: 0;
  }
  ${({ index }) => css`
    & ~ ${IndicatorLine} {
      /* Positioning */
      left: ${index * 12.5 + 12.5 / 2}%;
      /* Display & Box Model */
      width: 0;
    }
    &:hover ~ ${IndicatorLine} {
      /* Positioning */
      left: ${index * 12.5 + 12.5 / 2}%;
      /* Display & Box Model */
      width: 12.5%;
    }
  `}
`;

export const BorderLine = styled.div`
  /* Positioning */
  position: absolute;
  bottom: -2px;
  left: 0;

  /* Display & Box Model */
  width: 100%;
  border-bottom: 2px solid ${COLORS.shadowGray};
`;
