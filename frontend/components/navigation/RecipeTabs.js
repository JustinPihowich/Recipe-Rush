import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import IngredientsScreen from "../screens/IngredientsScreen";
import RecipesScreen from "../screens/RecipesScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import SavedRecipesScreen from "../screens/SavedRecipesScreen";

const Tab = createBottomTabNavigator();

function RecipeTabs(props) {
    return <>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === "Ingredients") {
                        iconName = focused ? "list" : "list-outline";
                    } else if(route.name === "Recipes") {
                        iconName = focused ? "fast-food" : "fast-food-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Ingredients" component={IngredientsScreen} />
            <Tab.Screen name="Recipes" component={RecipesScreen} />
            <Tab.Screen name="Preferences" component={PreferencesScreen} />
            <Tab.Screen name="Saved Recipes" component={SavedRecipesScreen} />
        </Tab.Navigator>
    </>
}

export default RecipeTabs;