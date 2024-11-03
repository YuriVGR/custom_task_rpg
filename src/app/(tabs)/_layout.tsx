import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: () => <FontAwesome5 name="home" size={20} color="black" />,
        }}
      />
      <Tabs.Screen
        name="rpg"
        options={{
          title: 'RPG',
          tabBarIcon: () => <FontAwesome5 name="dungeon" size={20} color="black" />,
    
        }}
      />
           <Tabs.Screen
        name="task"
        options={{
          title: 'Tasks',
          tabBarIcon: () => <FontAwesome5 name="tasks" size={20} color="black" />,
        }}
      />
           <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: () => <FontAwesome5 name="cog" size={20} color="black" />,
        }}
      />
    </Tabs>
  );
}