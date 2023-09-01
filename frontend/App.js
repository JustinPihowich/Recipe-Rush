import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import RecipeTabs from './components/navigation/RecipeTabs';

export default function App() {

  const [prefs, setPrefs] = useState({});
  return (
    <>
      <NavigationContainer>
        <RecipeTabs />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
