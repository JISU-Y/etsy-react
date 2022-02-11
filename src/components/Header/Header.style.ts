import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SignInButton = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  padding: 12px 15px;
  background: none;
  margin-right: 6px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    transform: scale(0.8);
    background: rgba(34, 34, 34, 0.1);
    opacity: 0;
    transition: transform 0.1s ease-in-out;
  }
`;

export const CartButton = styled.button`
  width: 45px;
  height: 45px;
  font-size: 20px;
  line-height: 20px;
  border: none;
  position: relative;
  background: transparent;
  &::after {
    content: '';
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    transform: scale(0.8);
    background: rgba(34, 34, 34, 0.1);
    opacity: 0;
    transition: transform 0.1s ease-in-out;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 36px;
  span {
    font-size: 30px;
    width: 86px;
    margin-right: 6px;
  }
  ${SignInButton}:hover::after, ${CartButton}:hover::after {
    content: '';
    transform: scale(1);
    opacity: 1;
    background: rgba(34, 34, 34, 0.1);
  }
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
  background: rgba(34, 34, 34, 0.05);
  padding: 10px 0 10px 20px;
  width: 100%;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  background: rgba(34, 34, 34, 0.05);
  width: 60px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(34, 34, 34, 0.1);
  }
`;

export const MenuContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 36px;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1400px;
  font-size: 14px;
`;

export const Menu = styled.li`
  height: 100%;
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
  padding: 6px;
  position: relative;
  &:first-child,
  &:last-child {
    margin: 0;
  }
`;

export const BorderLine = styled.div`
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  border-bottom: 2px solid rgba(34, 34, 34, 0.15);
`;

export const IndicatorLine = styled.div<{
  alreadyIn: boolean;
  listWidth: number;
  linePosition: number;
}>`
  transition: all 0.2s ease-in-out;
  ${({ alreadyIn, listWidth, linePosition }) => css`
    width: ${alreadyIn ? listWidth : 0}px;
    margin: 0 36px;
    position: absolute;
    bottom: -2px;
    left: ${linePosition + listWidth / 2}px;
    transform: translateX(-50%);
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid black;
  }`}
`;
