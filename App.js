import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateStory from './screens/CreatePost';
import Feed from './screens/Feed';
import Profile from './screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './Navigator/DrawerNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}