import React from 'react';
import FiveStars from '../../../../components/FiveStars';
import TabMenu from '../../../../components/TabMenu';
import COLORS from '../../../../styles/colors';
import * as S from './ReviewSection.style';

function ReviewSection({ reviewCount }: { reviewCount: number }) {
  return (
    <S.ReviewContainer>
      <S.ReviewCountBox>
        <S.ReviewCount>{reviewCount.toLocaleString()} reviews</S.ReviewCount>
        <FiveStars width={18} height={18} gap={5} color={COLORS.mainFont} />
      </S.ReviewCountBox>
      <S.RecentReviewNoti>
        <strong>Buyers are raving!</strong> Multiple people gave 5-star reviews
        to this shop in the past 7 days.
      </S.RecentReviewNoti>
      <S.TabMenuWrapper>
        <S.TabMenuBox>
          <TabMenu
            list={['Reviews for this item', 'Reviews for this shop']}
            fontSize={16}
            tagNumber={[163, 5549]}
          />
        </S.TabMenuBox>
      </S.TabMenuWrapper>
    </S.ReviewContainer>
  );
}

export default ReviewSection;
