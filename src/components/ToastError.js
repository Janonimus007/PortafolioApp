import Toast from 'react-native-toast-message';

export const ToastError =(message1,message2) => {
  Toast.show({
    type:'error',
    position:'bottom',
    text1:message1,
    text2:message2,
    visibilityTime:4000
  })
}