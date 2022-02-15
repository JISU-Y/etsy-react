import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';
import zIndex from '../../../../styles/zIndex';

export const SideInfoContainer = styled.div``;

export const SellerContainer = styled.div`
  margin-bottom: 12px;
`;

export const NormalName = styled.h4`
  font-size: 16px;
  line-height: 28px;
`;

export const SellerInfo = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const SalesNumber = styled.span`
  font-size: 13px;
  line-height: 18px;
  margin-right: 5px;
`;

export const ProductInfoContainer = styled.div`
  margin-bottom: 15px;
`;

export const ProductName = styled.h1`
  font-size: 26px;
  word-break: keep-all;
  margin-bottom: 10px;
  line-height: 32px;
`;

export const EtsyPickBox = styled.div`
  display: inline-block;
  padding: 6px 9px;
  background-color: ${COLORS.beige};
  border-radius: 15px;
  margin-bottom: 20px;
  position: relative;
  cursor: help;
  &:hover .tooltip {
    opacity: 1;
    transform: translate(0);
  }

  .tooltip {
    width: 300px;
  }
`;

export const EtsyPick = styled.span`
  font-size: 13px;
  word-break: break-all;
  border-bottom: 1px dashed ${COLORS.mainFont};
`;

export const ProductPrice = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

export const ProductTax = styled.p`
  font-size: 13px;
  margin: 5px 0;
  color: ${COLORS.subFont};
`;

export const ProductSelector = styled.div``;

export const SelectWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  font-size: 16px;
  box-shadow: 0 1px 6px 0 ${COLORS.hoverGray};
  border-radius: 5px;
  border: 1px solid ${COLORS.hoverGray};
  transition: ${TRANSITION.normal};
  color: ${COLORS.mainFont};
  cursor: pointer;
  &:hover {
    border: 1px solid ${COLORS.border};
    box-shadow: 0 1px 12px 0 ${COLORS.hoverGray};
  }
`;

export const Option = styled.option`
  font-size: 16px;
  padding: 5px 0;
`;

export const CartButton = styled.button`
  color: ${COLORS.white};
  width: 100%;
  min-width: 48px;
  min-height: 48px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 18px;
  text-align: center;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.mainFont};
    transform: scale(1);
    transition: ${TRANSITION.normal};
    border-radius: 24px;
    z-index: ${zIndex.hide};
  }
  &:hover::after {
    transform: scale(1.01);
    background-color: ${COLORS.darkGray};
  }
`;
