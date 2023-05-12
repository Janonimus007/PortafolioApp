import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutMeScreen, ContactMeScreen, HomeScreen } from '../../screens';
import { CustomDrawerLeft } from './CustomDrawerLeft';

const Drawer = createDrawerNavigator();

export const DrawerLeft = ()=> {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerLeft {...props}/>} screenOptions={{headerTitleAlign: 'center'}} >
      <Drawer.Screen name="Aplicaciones" component={HomeScreen} />
      <Drawer.Screen name="Contactame" component={ContactMeScreen} />
      <Drawer.Screen name="Sobre mi" component={AboutMeScreen} />
    </Drawer.Navigator>
  );
}