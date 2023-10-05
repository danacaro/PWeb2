import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { View, Text , TouchableOpacity, Image, FlatList} from 'react-native';
import { NavigationContext } from '@react-navigation/native'
import Usuario from './Usuario';
import Tab2 from './Tab2';


export default class Tab1 extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
       open: false,
       dataSource: [],
    };
  }

  componentDidMount = () =>{

    const request = new XMLHttpRequest();
    _this = this;
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log('success json', request.responseText);
        var data = JSON.parse(request.responseText)
        _this.setState({dataSource:data});
        
      } else {
        console.warn('error en json');
      }
    };

    request.open('GET', 'https://cuceimobile.space/datos.json');
    request.send();
  }

  render() {
    const navigation = this.context;
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

      <View style={{alignContent:'center', alignItems:'center',}}>
        <Text style={{color:'red', fontSize: 30, textAlign:'center'}}>Lista de Trabajadores</Text>
        <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => 

        <View style={{height:150}}> 
            <TouchableOpacity onPress={()=> navigation.navigate("Usuario",item)} ><Text style={{marginTop:15, color: 'black', fontSize: 20, textAlign: 'center'}}>Nombre: {item.Nombre}</Text></TouchableOpacity>
          <Text style={{color: 'black', fontSize: 20, textAlign: 'center',}}>Profesion: {item.Profesion}</Text>
          <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>Telefono: {item.Telefono}</Text>
          <Image
          source={{uri: item.Imagen}}
          style={{width: 50, height:50,marginTop:15,marginBottom:15, marginLeft:'40%'}}
          
          />

        </View>
        }
          keyExtractor={item => item.id}
        />
        </View>
        </View>
    );
  }
}
