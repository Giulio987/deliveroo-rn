import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import logo from '../assets/logo.png';

type Props = {};

const Categories = (props: Props) => {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      <CategoryCard
        imgUrl={
          'https://media.istockphoto.com/id/1286622470/photo/healthy-fresh-sushi-roll-set-with-ginger-close-up-japanese-food.jpg?b=1&s=170667a&w=0&k=20&c=ypBK2FsuGrgVTgKPb29eleA6YJEXb5d0PG6LZb0M0ZU='
        }
        title="Testing 1"
      />
      <CategoryCard
        imgUrl={
          'https://media.istockphoto.com/id/1286622470/photo/healthy-fresh-sushi-roll-set-with-ginger-close-up-japanese-food.jpg?b=1&s=170667a&w=0&k=20&c=ypBK2FsuGrgVTgKPb29eleA6YJEXb5d0PG6LZb0M0ZU='
        }
        title="Testing 2"
      />
      <CategoryCard
        imgUrl={
          'https://media.istockphoto.com/id/1286622470/photo/healthy-fresh-sushi-roll-set-with-ginger-close-up-japanese-food.jpg?b=1&s=170667a&w=0&k=20&c=ypBK2FsuGrgVTgKPb29eleA6YJEXb5d0PG6LZb0M0ZU='
        }
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;
