import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';
import ImageSection from './components/ImageSection';
import useProductDetails from './hooks/useProductDetails';

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

  const { result } = useProductDetails();

  const {
    state: { id: _id },
  } = useLocation<{ id: number }>();

  useEffect(() => {
    setImages(
      result?.data.data.filter(({ id }: DetailsProps) => id === _id)[0].images
    );
  }, [result?.data.data, _id]);

  return (
    <Container>
      <ImageSection images={images} />
    </Container>
  );
}

const Container = styled.div``;
