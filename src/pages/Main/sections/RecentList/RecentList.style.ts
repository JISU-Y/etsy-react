import styled from 'styled-components';
import COLORS from '../../../../styles/colors';

export const RecentListWrap = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1400px;
  gap: 18px;
  margin-bottom: 30px;
`;

export const RecentTitle = styled.div`
  display: flexbox;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;
`;

export const RecentLeft = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const RecentRight = styled.span`
  font-size: 13px;
  color: ${COLORS.subFont};
`;
