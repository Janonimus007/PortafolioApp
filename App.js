import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { DrawerLeft } from './src/router/';
import { paperContext } from './src/theme/paperContext';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function App() {
  return (
    <PaperProvider theme={paperContext}>
      <NavigationContainer>
        <StatusBar/>
        <DrawerLeft/>
        <Toast />
      </NavigationContainer>      
    </PaperProvider>

  );
}


