import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from './Perfil';
import Menu from './Menu';
import { create } from 'react-test-renderer';

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Drawer = createDrawerNavigator()
    return (

      <Drawer.Navigator>
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>

    );
  }
}
