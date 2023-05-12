import { useCallback } from 'react';
import {Linking,Alert,TouchableOpacity,StyleSheet} from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
export const OpenCoreApps = ({scheme,titulo,subtitulo}) => {

    const openApp =useCallback(()=>{
        Linking.openURL(scheme )
    },[scheme])

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