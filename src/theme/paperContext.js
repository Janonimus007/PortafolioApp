import { DefaultTheme } from "react-native-paper";

export const paperContext = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4164a7',
      accent: '#f1c40f',
      secondaryContainer:"#DDFAF8",
    },
  };