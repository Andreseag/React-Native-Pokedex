import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PokedexScreen from '../screens/Pokedex'
import PokemonScreen from '../screens/Pokemon'

const Stack = createStackNavigator()

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={
          { 
            title: 'Pokedex',
            headerTitleAlign: 'center'
          }
        }
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={
          { 
            title: 'Pokemon',
            headerTitleAlign: 'center'
          }
        }
      />
    </Stack.Navigator>
  )
}