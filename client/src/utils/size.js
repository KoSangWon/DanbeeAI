import { Dimensions } from 'react-native';

export const d = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    px: Number(Dimensions.get('window').width) / 380,
  };