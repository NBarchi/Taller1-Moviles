import React from 'react'
import { SafeAreaView } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'
import { RegisterScreen } from './src/screens/RegisterScreen'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/*<LoginScreen/>*/}
      <RegisterScreen/>
    </SafeAreaView>
  )
}

export default App;
