import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Recipe from './Recipe';

function RecipesScreen(props) {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then (res => res.json())
        .then (recipeData => {
            recipeData.forEach(recipe => {
                setRecipes([...recipes, recipe]);
            })
        })
    }, []);
    return <>
        <View>
            <Text>Recipes Screen</Text>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.idMeal.toString()}
                renderItem={({ item }) => <Recipe {...item} />}
                numColumns={2} // or any number for the grid
            />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      marginBottom: 12,
    },
  });

export default RecipesScreen;