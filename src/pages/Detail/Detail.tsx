import React, { useEffect, useState } from 'react';
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
  const [images, setImages] = useState<string[]>([]);

  const {
    state: { id },
  } = useLocation<{ id: number }>();

  const { data } = useSWR('productDetails.json', url => getData(url));

  useEffect(() => {
    setImages(
      data?.data.data.filter(({ id: _id }: { id: number }) => _id === id)[0]
        .images
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
