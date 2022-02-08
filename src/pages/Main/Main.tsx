import axios from 'axios';
import React from 'react';
import Favorite from '../../components/Favorite';
import TabMenu from '../../components/TabMenu';
import Card from './components/Card';
import CategoryCard from './components/CategoryCard';
import CircleCard from './components/CircleCard';
import ImageCard from './components/ImageCard';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

function Main() {
  React.useEffect(() => {
    const fetchingData = async () => {
      const data = await instance.get('data/searchBubbles.json');
      console.log(data);
    };
    fetchingData();
  }, []);

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
      <CategoryCard
        image="https://i.etsystatic.com/33988563/r/il/d2f76f/3628013772/il_340x270.3628013772_nqcp.jpg"
        title="Aniversary gifts sdfsd dgsgd  fsdf g gdsd"
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
