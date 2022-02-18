import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const Container = styled.div`
  width: calc((100% / 3) * 2);
  flex-basis: calc((100% / 3) * 2);
`;

export const CartProduct = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const SellerInfo = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const SellerName = styled.h3`
  /* Color */
  color: ${COLORS.darkGray};

  /* Font */
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`;

export const SellerContact = styled.p`
  /* Color */
  color: ${COLORS.subFont};

  /* Font */
  font-size: 13px;
  line-height: 18px;

  /* Other */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductInfo = styled.div`
  /* Display & Box Model */
  display: flex;
  gap: 20px;
`;

export const ProductImgWrapper = styled.div`
  /* Display & Box Model */
  min-width: 190px;
  max-height: 162px;
  border-radius: 10px;

  /* Other */
  overflow: hidden;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  /* Display & Box Model */
  width: 100%;
  height: 100%;
`;

export const ProductDetailBox = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Title = styled.h4`
  /* Display & Box Model */
  margin-bottom: 5px;

  /* Font */
  font-size: 18px;
  line-height: 24px;

  /* Other */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const OptionsBox = styled.ul`
  /* Color */
  color: ${COLORS.mainFont};
`;

export const OptionList = styled.li`
  /* Display & Box Model */
  margin-bottom: 5px;

  /* Font */
  font-size: 13px;
  line-height: 18px;
`;

export const EditButton = styled.button`
  /* Display & Box Model */
  border: none;
  padding: 0;
  margin-bottom: 20px;

  /* Color */
  background-color: transparent;
  color: ${COLORS.mainFont};

  /* Font */
  font-size: 13px;
  line-height: 18px;

  /* Other */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonBox = styled.div`
  /* Display & Box Model */
  display: flex;
  margin-left: -15px;
  margin-top: 10px;
`;

export const Span = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

export const QuantitySelect = styled.select`
  /* Display & Box Model */
  width: 80px;
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

export const PriceInfo = styled.div`
  /* Display & Box Model */
  min-width: 100px;

  /* Text */
  text-align: right;
`;

export const CurrentPrice = styled.p`
  /* Text */
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;

export const OriginalPrice = styled.p`
  /* Display & Box Model */
  padding: 10px 0;
  /* Color */
  color: ${COLORS.subFont};

  /* Text */
  font-size: 13px;
  line-height: 18px;
  text-decoration: line-through;
`;

export const SaleNoti = styled.p`
  /* Color */
  color: #258635;

  /* Text */
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;
