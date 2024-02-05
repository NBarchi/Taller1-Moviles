import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const RegisterScreen = () => {

    
    const [email, setEmail] = useState('')
    const [contra, setContra] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telf, setTelf] = useState('')
    
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>REGISTRO</Text>
            <View style={{gap:20}}>
                <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder='EMAIL'/>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={setContra}
                value={contra}
                placeholder='CONTRASEÑA'/>
                <TextInput
                style={styles.input}
                onChangeText={setNombre}
                value={nombre}
                placeholder='NOMBRE'/>
                <TextInput
                style={styles.input}
                onChangeText={setApellidos}
                value={apellidos}
                placeholder='APELLIDOS'/>
                <TextInput
                style={styles.input}
                onChangeText={setTelf}
                value={telf}
                placeholder='TELÉFONO'/>
            </View>
        </View>
        <TouchableOpacity style={styles.boton}>
            <Text style={{color: 'white'}}>CREAR CUENTA</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        paddingTop: 80,
        gap: 70
    },

    title:{
        fontSize:16,
        fontWeight: 'bold'
    },

    input:{
        borderBottomWidth: 1
    },

    box:{
        gap: 30,
        margin:10
    },

    boton:{
        height: 40,
        borderWidth: 1,
        alignItems: 'center',
        padding:10,
        marginTop: 30,
        backgroundColor: 'black',
    },

})