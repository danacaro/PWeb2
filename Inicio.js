import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { NavigationContext } from '@react-navigation/native'
//Importacion de componentes



export default class Inicio extends Component {
  static contextType = NavigationContext;
  
  constructor(props) {
    super(props);
    this.state = {//declaracion de variables
      modalVisible: false,
      nombre:'a',
      correo:'',
      password:'',
    };
  }



  render() {
    //Programacion de objetos
    const navigation = this.context;

    clickemail = () =>{
      console.log(`Presionaste el boton email`)
      this.setState({modalVisible: true});
    }
    clickfacebook = () =>{
      console.log(`Presionaste el boton facebook`)
    }
    btnAceptar = () =>{
      this.setState({modalVisible: false});
      console.log("aaaa");
      navigation.navigate("Menu",{nombre:"juanito"});
              
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             // Typical action to be performed when the document is ready:
             //document.getElementById("demo").innerHTML = xhttp.responseText;
             console.log("error");
          }

          if(xhttp.responseText === "3"){
            Alert.alert("Correo no reconocido, registrate");
          }else{
            if(xhttp.responseText === "0"){
              Alert.alert("password Erroneo, intenta de nuevo");
            }else{
              navigation.navigate("Menu",{nombre:xhttp.responseText});
              console.log({nombre:xhttp.responseText})
            }
          }

      };
      xhttp.open("GET", `https://insatiable-flap.000webhostapp.com/verifica.php?correo=${this.state.correo}&password=${this.state.password}`, true);
      xhttp.send();

    }
    return (//parte visible que se mostrará
    
    
    <View style={stylesI.container}>
      <Modal
      animationType='slide'
      visible= {this.state.modalVisible}
      >

        <View style={{flex: 1, backgroundColor: 'rgba(1,1,1, 0.5)', justifyContent: 'center', alignItems:'center'}}>

            <View style={stylesI.containerMail}>
            <Text style={{fontSize: 40,color:'white',}}>EMAIL</Text>

            <TextInput style={stylesI.inputText}
              placeholder='correo'
              onChangeText={(correo) => this.setState({correo})}
            />
            <TextInput style={stylesI.inputText}
              placeholder='contraseña'
              onChangeText={(password) => this.setState({password})}
            />

          <TouchableOpacity style= {stylesI.aceptar} onPress={btnAceptar} >
              <Text style= {{marginLeft: 10, marginTop: 11, fontSize: 16, color: 'black'}}>ACEPTAR</Text>
          </TouchableOpacity>

          </View>

        </View>
      </Modal>

      <Image
        style={stylesI.imagen1}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/009/383/717/original/man-worker-clipart-design-illustration-free-png.png"
         
        }}
        resizeMode='contain'
      />
      <View style= {stylesI.login}>
        <Text style={stylesI.titulo}>Welcome to handyman</Text>
        <TouchableOpacity style={stylesI.btn1} onPress={clickemail}>
        <View style={stylesI.email}>
          <View style= {{flexDirection: 'row',}}>
            <Image style={stylesI.icon} source={{uri: "https://freesvg.org/img/Mail-Icon-White-on-Grey.png"}}/>
            <Text style={{marginLeft: 15, marginTop: 11, fontSize: 16, color: 'white'}}>Sign in with Email</Text>
          </View>
        </View>
        </TouchableOpacity> 
        <TouchableOpacity style={stylesI.btn2} onPress={clickfacebook}>
        <View style={stylesI.facebook}>
          <View style= {{flexDirection: 'row',}}>
            <Image style={stylesI.icon} source={{uri: "https://www.mmppicture.co.in/wp-content/uploads/2021/03/Facebook-Icon-PNG-31-768x768.png"}}/>
            <Text style={{marginLeft: 10, marginTop: 11, fontSize: 16, color: 'black'}}>Sign in with Facebook</Text>
          </View>
          
        
        </View>
        </TouchableOpacity >
        <Text style={{marginTop: 20, textAlign:'center',flexDirection:'row'}}>Don't have an account? <TouchableOpacity style={{borderColor: 'black',borderWidth: 0, width:60,height:20,}}><Text style={{color: 'white',marginTop:3}} onPress={() => navigation.navigate('Inscripcion')}>SIGN UP</Text></TouchableOpacity></Text>
        
      </View>

    </View>
    );
  }
}

//styles
const stylesI = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen1:{
      width: 200,
      height: 700,
    },
    login:{
      top: 450,
      position: 'absolute',
      width: 350,
      height: 250,
      backgroundColor: '#ed953e',
      borderRadius: 25,
      borderColor: 'black',
      
    },
    titulo:{
      marginTop: 25,
      textAlign:'center',
      fontSize: 25,
      color: 'white',
    },
    email:{
      alignItems: 'center',
      width: 300,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#0e0d52'
    },
    facebook:{
      alignItems: 'center',
      width: 300,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ffffff',
    },
    icon:{
      marginTop: 11,
      width:25,
      height: 25,
    },
    btn1:{
      marginLeft: 25,
      alignItems: 'center',
      marginTop: 15,
      width: 300,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#0e0d52'
    },
    btn2:{
      marginLeft: 25,
      alignItems: 'center',
      marginTop: 15,
      width: 300,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ffffff',
    },
    containerMail:{
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#718EA4',
      width: '90%',
      height: '60%',
      borderWidth: 2,
      borderColor: '#496D89',
    },
    inputText:{
      width: '70%',
      height: '15%',
      borderRadius: 8,
      borderColor: 'black',
      backgroundColor: 'white',
      marginTop: 25,
      alignItems: 'center',
      marginBottom: 25,
      borderWidth: 1,
    },
    aceptar:{
      width: '30%',
      height: '10%',
      borderRadius: 8,
      borderColor: 'black',
      backgroundColor: '#e6f2ff',
      justifyContent: 'center',
      marginTop: 15,
      alignItems: 'center',
      marginBottom: 15,
      borderWidth: 1,
  }
});