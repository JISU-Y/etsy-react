import React from 'react';
import Favorite from '../../components/Favorite';
import TabMenu from '../../components/TabMenu';
import Card from './components/Card';
import CircleCard from './components/CircleCard';
import ImageCard from './components/ImageCard';

function Main() {
  return (
    <div>
      <TabMenu
        list={[
          'Home Improvement Ideas',
          'Modern Farmhouse',
          'Health & Wealness',
          'Personalized gift',
        ]}
      />
      <Favorite size="large" />
      <ImageCard
        width={250}
        height={167}
        price={31}
        image="https://i.etsystatic.com/10204022/c/2479/1970/243/466/il/ebecb4/2981833988/il_340x270.2981833988_6sg5.jpg"
      />
      <Card
        width={250}
        height={200}
        image="https://i.etsystatic.com/10204022/c/2479/1970/243/466/il/ebecb4/2981833988/il_340x270.2981833988_6sg5.jpg"
        price={36.6}
        reviewCount={4000}
        title="Personalized Name Necklace by CaitlynMinimalist • Gold Name Necklace with Box Chain • Perfect Gift for Her • Personalized Gift • NM81F91"
      />
      <CircleCard
        title="FaceMask & garden"
        image="https://i.etsystatic.com/25031203/r/il/bf807c/2514352834/il_300x300.2514352834_t45s.jpg"
      />
    </div>
  );
}

export default Main;
