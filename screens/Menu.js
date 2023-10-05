import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    const Tab = createBottomTabNavigator();

    return (
      
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Tab1} initialParams={{nombre:this.props.route.params.nombre}}
          options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="home" color={'black'} size={30} />
          ),
        }}/>
        <Tab.Screen name="Perfil" component={Tab2} initialParams={{nombre:this.props.route.params.nombre}}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="account" color={'black'} size={30} />
            ),
          }}
        
        />
      </Tab.Navigator>

    );
  }
}
