import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ClipBoard from 'expo-clipboard';

import Slider from '@react-native-community/slider';

import Logo from './src/assets/logo.png';

let charset= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {

  const [password, setPassword] = useState('');
  const [slider, setSlider] = useState(5);

  function generatePass(){
    let pass = '';

    for(let i = 0, n = charset.length; i < slider; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);
  }

  function copyToClipBoard(){
    ClipBoard.setString(password);
    alert('Password copied sucessfull!')
  }

  
  
  return(
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.title}>{slider} Caracteres</Text>

      <View style={styles.contentSlider}>
        <Slider 
          style={{ width: 300, heigth: 40}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF1408"
          maximumTrackTintColor="#0C2576"
          value={slider}
          onValueChange={(valueSlider) => setSlider(valueSlider.toFixed(0))}
        /> 
      </View> 

      <TouchableOpacity style={styles.button}onPress={generatePass}>
        <Text style={styles.textButton}>Gerar senha</Text>
      </TouchableOpacity>

      <View style={styles.password}>
        <Text style={styles.textPass} onLongPress={copyToClipBoard}>{password}</Text>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C2576',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  contentSlider: {
    backgroundColor: '#FFF',
    padding: 20,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D67D1E',

    width: 340,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 20,
  },

  textButton: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold'
  },
  password: {
    width: 340,
    height: 65,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 20,
  },

  textPass: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0C2576'
  }
})
