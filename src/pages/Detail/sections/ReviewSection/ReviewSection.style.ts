import styled from 'styled-components';
import COLORS from '../../../../styles/colors';

export const ReviewContainer = styled.div`
  margin-top: 45px;
`;

export const ReviewCountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReviewCount = styled.span`
  font-size: 26px;
  line-height: 42px;
`;

export const RecentReviewNoti = styled.p`
  font-size: 13px;
  margin: 15px 0;
  strong {
    font-weight: bold;
  }
`;

export const TabMenuWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid ${COLORS.border};
`;

export const TabMenuBox = styled.div`
  width: 50%;
  & > div {
    border-bottom: none;
  }
`;
