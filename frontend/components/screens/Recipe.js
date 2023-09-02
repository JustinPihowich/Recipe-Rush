import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Song = ({ title, artist, genre, year, length, img }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>by {artist}</Text>
      <Text style={styles.text}>
        {genre} | {year} | {length}
      </Text>
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

export default Song;
