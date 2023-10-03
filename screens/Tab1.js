import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { View, Text , TouchableOpacity, Image, FlatList} from 'react-native';

import Tab2 from './Tab2';


export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       open: false,
       dataSource: [],
    };
  }

  componentDidMount(){
    var xhttp = new XMLHttpRequest();
    _this = this; //para acceder al usestate en el if
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          var Temp = JSON.parse(xhttp.responseText);
          _this.setState({dataSource:Temp});
        }
    };
    xhttp.open("GET", "https://dcc2.000webhostapp.com/2023B/datos.json", true);
    xhttp.send();
  }

  render() {
    
    return (
      <View>
        <TouchableOpacity style={{margin:'15',width:'15'}} >
            <Image
            source={require("../Imagenes/menuham.png")}
            style={{width:25,height:25}}
            >

            </Image>

        </TouchableOpacity>
        <Text style={{color: 'black', textAlign: 'center',fontSize: 40}}> Bienvenido </Text>

      <View>
        <Text style={{color:'red', fontSize: 30, textAlign:'center'}}>Lista de Trabajadores</Text>
        <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => 
      
        <View style={{height:40}}> 
          <Text style={{color:'black',fontSize:15}}>{item.Nombre}</Text>  
          <Text style={{color:'black',fontSize:15}}>{item.Profesion}</Text>
          <Text style={{color:'black',fontSize:15}}>{item.Telefono}</Text>

          <View>
          <Image
          style={{width:200,height:150}}
          />
          </View>

        </View>
        }
          keyExtractor={item => item.id}
        />
        </View>
        </View>
    );
  }
}
