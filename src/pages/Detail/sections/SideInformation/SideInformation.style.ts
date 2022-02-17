import styled, { css } from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

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
  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  font-size: 16px;
  padding: 5px 0;
`;

export const PersonalizationBox = styled.div<{ shouldShow: boolean }>`
  max-height: ${({ shouldShow }) => (shouldShow ? '500px' : 0)};
  height: fit-content;
  transition: ${TRANSITION.slow};
  overflow: hidden;
`;

export const PersonalizationGuide = styled.p`
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 6px;
`;

export const PersonalizationText = styled.textarea<{ isOverLimit: boolean }>`
  width: 100%;
  font-size: 16px;
  line-height: 28px;
  height: 48px;
  outline: none;
  padding: 9px 12px;
  box-shadow: 0 1px 4px 0 ${COLORS.hoverGray} inset;
  border: 1px solid ${COLORS.hoverGray};
  border-radius: 6px;
  color: ${COLORS.darkGray};
  display: block;
  transition: ${TRANSITION.normal};
  &:hover {
    border: 1px solid ${COLORS.border};
  }
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ isOverLimit }) =>
    isOverLimit &&
    css`
      background-color: ${COLORS.warning};
      border-color: rgba(166, 26, 46, 0.35);
      &:hover {
        border: 1px solid ${COLORS.error};
      }
    `}
`;

export const TextRemaining = styled.p`
  font-size: 13px;
  line-height: 18px;
  text-align: right;
`;
export const LimitError = styled.p`
  color: ${COLORS.error};
  margin-top: 6px;
  font-size: 16px;
  line-height: 28px;
`;

export const ButtonSpacer = styled.div`
  width: 100%;
  height: 20px;
`;
