import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react';

function IngredientsScreen(props) {

    const [ingredients, setIngredients] = useState([]);
    
    return <>
        <View>
            <Text>Ingredients Screen</Text>
        </View>
    </>
}

export default IngredientsScreen;