import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import logo from '../assets/logo.png';
import sanityclient, { urlFor } from '../../sanity';
import { Category } from '../../types/Category';
type Props = {};

const Categories = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    sanityclient
      .fetch(
        `
        *[_type == "category"]
        `
      )
      .then((res: Category[]) => {
        setCategories(res);
      })
      .catch((err) => {
        Alert.alert('Error fetching categories');
      });
  }, []);

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
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          //NOTE con sanity si potrebbero anche fare manipolazioni al recupero es. urlFor(category.image).width(200).url()
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
