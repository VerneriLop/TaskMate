import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  input: {
    marginBottom: verticalScale(20),
  },
});

export default style;
