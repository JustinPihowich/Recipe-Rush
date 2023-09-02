import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Recipe = ({ idMeal, strMeal, strCategory, strArea, strMealThumb }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{strMeal}</Text>
      <Text style={styles.text}>Category: {strCategory}</Text>
      <Text style={styles.text}>Area: {strArea}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    margin: 4,
    width: '48%', // You can adjust this according to your design
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
});

export default Recipe;
