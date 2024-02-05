import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [contra, setContra] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style = {styles.title}>ACCEDE A TU CUENTA</Text>
        <TextInput 
        style={styles.input} 
        onChangeText={setEmail}
        value={email} 
        placeholder='EMAIL'/>
        <TextInput 
        secureTextEntry={true}
        style={styles.input} 
        onChangeText={setContra}
        value={contra}
        placeholder='CONTRASEÑA'/>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textbtn}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline'}}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>¿NECESITAS UNA CUENTA?</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textbtn}>REGÍSTRATE</Text>
        </TouchableOpacity>
      </View>
    </View>  
    )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      padding: 20,
      paddingTop: 100,
      gap: 70
    },

    title:{
      fontSize:15,
      fontWeight: 'bold'
    },

    box:{
      gap: 30
    },

    input:{
      borderBottomWidth: 1
    },

    boton:{
      height: 30,
      borderWidth: 1,
      alignItems: 'center',
      padding:5,
      marginTop: 30,
      backgroundColor: 'black',
    },

    textbtn:{
      color: 'white'
    }
})
