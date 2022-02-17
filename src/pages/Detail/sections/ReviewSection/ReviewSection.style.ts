import styled from 'styled-components';
import COLORS from '../../../../styles/colors';

export const ReviewContainer = styled.div`
  margin-top: 45px;
`;

export const ReviewCountBox = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReviewCount = styled.span`
  /* Text */
  font-size: 26px;
  line-height: 42px;
`;

export const RecentReviewNoti = styled.p`
  /* Display & Box Model */
  margin: 15px 0;

  /* Text */
  font-size: 13px;
  strong {
    font-weight: bold;
  }
`;

export const TabMenuWrapper = styled.div`
  /* Display & Box Model */
  width: 100%;
  border-bottom: 2px solid ${COLORS.border};
`;

export const TabMenuBox = styled.div`
  width: 50%;
  & > div {
    border-bottom: none;
  }
`;
