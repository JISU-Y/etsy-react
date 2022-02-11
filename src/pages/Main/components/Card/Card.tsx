import React from 'react';
import Favorite from '../../../../components/Favorite';
import { currency } from '../../../../constants/localeSetting';
import { padCentsDigits } from '../../../../utils/convertDigit';
import { ImageCardProps } from '../ImageCard/ImageCard';
import StarIcon from '../../../../icons/StarIcon';
import {
  CardContainer,
  CardWrap,
  FavoriteWrap,
  InfoP,
  ItemInfo,
  ProductImg,
  ReviewCount,
  ReviewStars,
} from './Card.style';

interface CardProps extends ImageCardProps {
  title: string;
  reviewCount: number;
}

function Card({ title, reviewCount, price, image, ...props }: CardProps) {
  return (
    <CardContainer>
      <CardWrap>
        <ProductImg src={image} alt="item" {...props} />
        <ItemInfo>
          <InfoP>
            {title.length > 60 ? `${title.slice(0, 59)}...` : title}
          </InfoP>
          <ReviewStars>
            {Array.from([1, 2, 3, 4, 5], el => (
              <StarIcon key={el} width={12} height={12} color="black" />
            ))}
            <ReviewCount>({reviewCount.toLocaleString()})</ReviewCount>
          </ReviewStars>
          <InfoP>
            {currency} {padCentsDigits(price)}
          </InfoP>
        </ItemInfo>
      </CardWrap>
      <FavoriteWrap>
        <Favorite size="small" />
      </FavoriteWrap>
    </CardContainer>
  );
}

export default Card;
