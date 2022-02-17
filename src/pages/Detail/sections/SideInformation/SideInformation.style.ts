import styled, { css } from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const SideInfoContainer = styled.div``;

export const SellerContainer = styled.div`
  margin-bottom: 12px;
`;

export const NormalName = styled.h4`
  /* Text */
  font-size: 16px;
  line-height: 28px;
`;

export const SellerInfo = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const SalesNumber = styled.span`
  /* Display & Box Model */
  margin-right: 5px;

  /* Text */
  font-size: 13px;
  line-height: 18px;
`;

export const ProductInfoContainer = styled.div`
  margin-bottom: 15px;
`;

export const ProductName = styled.h1`
  /* Display & Box Model */
  margin-bottom: 10px;

  /* Text */
  font-size: 26px;
  line-height: 32px;
  word-break: keep-all;
`;

export const EtsyPickBox = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: inline-block;
  padding: 6px 9px;
  margin-bottom: 20px;
  border-radius: 15px;

  /* Color */
  background-color: ${COLORS.beige};

  /* Other */
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
  /* Display & Box Model */
  border-bottom: 1px dashed ${COLORS.mainFont};

  /* Text */
  font-size: 13px;
  word-break: break-all;
`;

export const ProductPrice = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

export const ProductTax = styled.p`
  /* Display & Box Model */
  margin: 5px 0;

  /* Color */
  color: ${COLORS.subFont};

  /* Text */
  font-size: 13px;
`;

export const ProductSelector = styled.div``;

export const SelectWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Select = styled.select`
  /* Display & Box Model */
  width: 100%;
  height: 48px;
  padding: 0 12px;
  border-radius: 5px;
  border: 1px solid ${COLORS.hoverGray};
  box-shadow: 0 1px 6px 0 ${COLORS.hoverGray};

  /* Color */
  color: ${COLORS.mainFont};

  /* Text */
  font-size: 16px;

  /* Other */
  transition: ${TRANSITION.normal};
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
  /* Display & Box Model */
  padding: 5px 0;

  /* Text */
  font-size: 16px;
`;

export const PersonalizationBox = styled.div<{ shouldShow: boolean }>`
  /* Display & Box Model */
  height: fit-content;
  max-height: ${({ shouldShow }) => (shouldShow ? '500px' : 0)};

  /* Other */
  transition: ${TRANSITION.slow};
  overflow: hidden;
`;

export const PersonalizationGuide = styled.p`
  /* Display & Box Model */
  margin-bottom: 6px;

  /* Text */
  font-size: 13px;
  line-height: 18px;
`;

export const PersonalizationText = styled.textarea<{ isOverLimit: boolean }>`
  /* Display & Box Model */
  display: block;
  width: 100%;
  height: 48px;
  padding: 9px 12px;
  border: 1px solid ${COLORS.hoverGray};
  border-radius: 6px;
  outline: none;
  box-shadow: 0 1px 4px 0 ${COLORS.hoverGray} inset;

  /* Color */
  color: ${COLORS.darkGray};

  /* Text */
  font-size: 16px;
  line-height: 28px;

  /* Other */
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
      /* Color */
      background-color: ${COLORS.warning};
      border-color: rgba(166, 26, 46, 0.35);
      &:hover {
        border: 1px solid ${COLORS.error};
      }
    `}
`;

export const TextRemaining = styled.p`
  /* Text */
  font-size: 13px;
  line-height: 18px;
  text-align: right;
`;
export const LimitError = styled.p`
  /* Display & Box Model */
  margin-top: 6px;

  /* Color */
  color: ${COLORS.error};

  /* Text */
  font-size: 16px;
  line-height: 28px;
`;

export const ButtonSpacer = styled.div`
  width: 100%;
  height: 20px;
`;
