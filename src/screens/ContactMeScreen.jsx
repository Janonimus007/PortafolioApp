import { View, Text } from 'react-native'
import React from 'react'
import { AbrirAplicaciones } from '../components/OpenApps'
import { OpenCoreApps } from '../components/OpenCoreApps'

export const ContactMeScreen=() =>{
  return (
    <View>
      <OpenCoreApps scheme={"tel:+56973756554"} titulo={'LLamar a alejandro'}/>
      <AbrirAplicaciones 
      scheme={"mailto: kano.verapadd@gmail.com?subject=Trabajo&body=!Hola Alejandro¡ Acabo de ver tu portafolio y me interesaria hablar contigo acerca de..."} 
      titulo={'Enviar mail a alejandro'}/>
            <AbrirAplicaciones 
      scheme={"https://wa.me/+56999632707?text=!Hola Alejandro¡ Acabo de ver tu portafolio y me interesaria hablar contigo acerca de..."} 
      titulo={'Enviar Whatsapp a alejandro'}/>
    </View>
  )
}