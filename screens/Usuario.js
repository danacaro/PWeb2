import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Usuario extends Component {
    //static contextType = NavigationContext;
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
        
        return (
          <View>
            
            <Text style={{marginTop:15, color: 'black', fontSize: 20, textAlign: 'center'}}> Nombre: <Text style={{color:'red'}}>{this.props.route.params.Nombre}</Text></Text>
            <Text style={{color: 'black', fontSize: 20, textAlign: 'center',}}> Profesion: <Text style={{color:'red'}}>{this.props.route.params.Profesion}</Text></Text>
            <Text style={{color: 'black', fontSize: 20, textAlign: 'center',}}> Telefono: <Text style={{color:'red'}}></Text> this.props.route.params.Telefono}</Text>
            <Image
            source={{uri: this.props.route.params.Imagen}}
            style={{width: 100, height:100,marginTop:15,marginBottom:15, marginLeft:'40%'}}
                
            />


          </View>
        );
      }
    }