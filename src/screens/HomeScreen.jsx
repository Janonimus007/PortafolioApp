import { View } from 'react-native'
import React from 'react'
import { AbrirAplicaciones } from '../components/OpenApps'

export const HomeScreen = () => {
  return (
    <View>
      <AbrirAplicaciones 
      scheme={"market://launch?id=com.front_enac"} 
      Link='https://play.google.com/store/apps/details?id=com.front_enac&hl=es_CL&gl=US'
      titulo={'Enac credencial virtual'}/>
      <AbrirAplicaciones 
      scheme={"market://launch?id=org.dgoontuvoto"} 
      Link='https://play.google.com/store/apps/details?id=org.dgoontuvoto&hl=es_CL&gl=US'
      titulo={'Dgo-on'}/>
      <AbrirAplicaciones 
      scheme={"market://launch?id=com.tcglatam.tcgscout.ionicapp"} 
      Link='https://play.google.com/store/apps/details?id=com.tcglatam.tcgscout.ionicapp&hl=es_CL&gl=US'
      titulo={'TCG Scout'}/>
      <AbrirAplicaciones 
      scheme={"market://launch?id=com.webclass.WebClass"} 
      Link='https://play.google.com/store/apps/details?id=com.webclass.WebClass&hl=es_BO'
      titulo={'Webclass'}/>
    </View>
  )
}