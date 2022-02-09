import React from 'react';
import styled from 'styled-components';

interface Props {}

const menu = [
  'Jewelry & Acessories',
  'Clothing & Shoes',
  'Home & Living',
  'Wedding & Party',
  'Toys & Enertainment',
  'Art & Cellectibles',
  'Craft Supplies & Tools',
  'Vintage',
];

function Header({}: Props) {
  return (
    <HeaderContainer>
      <SearchContainer>
        <span>logo</span>
        <form>
          <input type="text" placeholder="Search for anything" />
          <button>검색</button>
        </form>
        <button>Sign in</button>
        <button>🛒</button>
      </SearchContainer>
      <MenuContainer>
        {menu.map((tab: string) => (
          <li key={tab}>{tab}</li>
        ))}
      </MenuContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 36px;
  padding-bottom: 0;
  span {
    font-size: 30px;
    width: 86px;
  }
  form {
    display: flex;
    width: 100%;
    border: 2px solid black;
    border-radius: 50px;
    overflow: hidden;
    input {
      background: rgba(34, 34, 34, 0.05);
      padding: 10px 0 10px 20px;
      width: 100%;
      border: none;
      outline: none;
    }
    button {
      background: rgba(34, 34, 34, 0.05);
      width: 60px;
      border: none;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
    }
    button:hover {
      background: rgba(34, 34, 34, 0.1);
    }
  }
  & > button {
    width: 100px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 13px;
    padding: 12px 15px;
    background: none;
    transition: background 0.2s ease-in-out;
  }
  & > button:last-child {
    width: 45px;
    height: 45px;
    font-size: 20px;
    border-radius: 50%;
    line-height: 20px;
  }
  & > button:hover {
    background: rgba(34, 34, 34, 0.1);
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 36px;
  padding-bottom: 0;
  border-bottom: 2px solid rgba(34, 34, 34, 0.15);
  li {
    margin: 6px;
    height: 48px;
    cursor: pointer;
    font-size: 13px;
    line-height: 18px;
    padding-bottom: 12px;
    position: relative;
  }
  li:first-child,
  li:last-child {
    margin: 0;
  }
  li::after {
    border-bottom: none;
    transition: all 0.2s ease-in;
  }
  li:hover::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 90%;
    border-bottom: 2px solid black;
  }
`;

export default Header;
