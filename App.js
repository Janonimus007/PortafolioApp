import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { DrawerLeft } from './src/router/';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar/>
        <DrawerLeft/>
      </NavigationContainer>      
    </PaperProvider>

  );
}


