import React from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { getData } from '../../utils/axios';
import ImageSection from './components/ImageSection';

export interface DetailsProps {
  id: number;
  images: string[];
  title: string;
  sold: number;
  provider: string;
  etsyPick: boolean;
  price: number;
  discount: number;
  finishOptions: string[];
  lengthOptions: number[];
  personalization: string;
  details: string[];
  quickDelivery: boolean;
}

export default function Detail() {
  const [images, setImages] = React.useState<string[]>([]);

  const {
    state: { id },
  } = useLocation<{ id: number }>();

  const { data } = useSWR('productDetails.json', url => getData(url));

  React.useEffect(() => {
    setImages(
      data?.data.data.filter((el: { id: number }) => el.id === id)[0].images
    );
  }, [data?.data.data, id]);

  if (!data) return <div>...loading</div>;

  return (
    <Container>
      <ImageSection images={images} />
    </Container>
  );
}

const Container = styled.div``;
