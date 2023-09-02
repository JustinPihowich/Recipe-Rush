import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Recipe from './Recipe';

function RecipesScreen(props) {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async (letter) => {
          try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            const data = await res.json();
            if (data.meals) { // Checking if the response contains meals
              return data.meals;
            }
            return [];
          } catch (error) {
            console.error("Error fetching data:", error);
            return [];
          }
        };
      
        const fetchAllData = async () => {
          const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Create an array of alphabets
          let allRecipes = [];
      
          for (let letter of allLetters) {
            const recipes = await fetchData(letter);
            allRecipes = [...allRecipes, ...recipes];
          }
      
          setRecipes(allRecipes);
        };
      
        fetchAllData();
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