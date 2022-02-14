import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';
import ImageSection from './components/ImageSection';
import useProductDetails from './hooks/useProductDetails';

export default function Detail() {
  const [images, setImages] = useState<string[] | undefined>([]);

  const { data } = useProductDetails();

  const {
    state: { id: _id },
  } = useLocation<{ id: number }>();

  useEffect(() => {
    if (!data) return;
    setImages(data.filter(({ id }) => id === _id)[0].images);
  }, [data, _id]);

  return (
    <Container>
      <ImageSection images={images} />
    </Container>
  );
}

const Container = styled.div``;
