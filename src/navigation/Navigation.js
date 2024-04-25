import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// import Navigation components
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';



const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteNavigation} options={
        {
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Icon name="heart" color={color} size={20} />
        }
      
      } />
      <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
        title: 'Pokedex',
        // tabBarIcon: ({ color }) => <Icon name="pokeball" color={color} size={20} />
        tabBarIcon: ({ color }) => renderPokeBallIcon(color)
      
      }} />
      <Tab.Screen name="Account" component={AccountNavigation} options={
        {
          title: 'Mi cuenta',
          tabBarIcon: ({ color }) => <Icon name="account" color={color} size={20} />
        }
      } />
    </Tab.Navigator>
  )
}

function renderPokeBallIcon(color) {
  return <Image source={require('../assets/pokeball.png')} style={{ width: 75, height: 75, top: -18 }} />
}

export default Navigation