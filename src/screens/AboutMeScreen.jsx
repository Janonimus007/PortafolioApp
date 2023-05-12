import { View, Text } from 'react-native'
import React from 'react'
import { AbrirAplicaciones } from '../components/OpenApps'

export const  AboutMeScreen = ()=> {
  return (
    <View>
      <AbrirAplicaciones 
      scheme={"https://github.com/Janonimus007"} 
      titulo={'Git hub'}/>
      <AbrirAplicaciones 
      scheme={"https://www.linkedin.com/in/alejandro-vera-paz-602b19162/"} 
      titulo={'Linkedin'}/>
    </View>
  )
}