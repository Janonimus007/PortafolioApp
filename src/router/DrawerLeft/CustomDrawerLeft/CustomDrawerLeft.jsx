import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';

import { View, Text } from 'react-native'
import React from 'react'

export const  CustomDrawerLeft = (props)=> {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList  {...props}/>
    </DrawerContentScrollView>
  )
}