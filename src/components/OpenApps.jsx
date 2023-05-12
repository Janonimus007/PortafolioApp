import { useCallback } from 'react';
import {Linking,Alert,TouchableOpacity,StyleSheet} from 'react-native';
import { ToastError } from './ToastError';
import { View } from 'react-native';
import { Text } from 'react-native';
export const AbrirAplicaciones=({scheme,Link='vacio',titulo,subtitulo})=> {
    const openApp =async()=>{

        // const scheme = Platform.OS === 'android' ? `market://launch?id=com.authy.authy` : 'authy://itunes.apple.com/app/authy/id494168017';
        // const twilioLink  = Platform.OS === 'android' ? 'https://play.google.com/store/apps/details?id=com.authy.authy&hl=en':
        // 'itms-apps://apps.apple.com/us/app/twilio-authy/id494168017'
        Linking.canOpenURL(scheme).then(supported => {
          if (supported) {
            Linking.openURL(scheme );
          } 
          else {
            Linking.canOpenURL(Link).then(supported=>{
              if(supported){
                Linking.openURL(Link );
              }else{
                return ToastError('ERROR','No se pudo abrir la aplicacion')
              }
            })
            
          }
        })
            
      }
  return (
    <TouchableOpacity onPress={openApp}>
        <View>
            <Text>
                {titulo}
            </Text>
            <Text>
                {subtitulo}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})