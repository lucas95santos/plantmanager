import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    paddingTop: Constants.statusBarHeight,
  },
  textHeading: {
    fontFamily: fonts.heading,
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    color: colors.heading
  },
  image: {
    height: Dimensions.get('window').width * 0.8
  },
  textFooter: {
    fontFamily: fonts.text,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading
  },
  advanceButton: {
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  advanceButtonIcon: {
    color: colors.white,
    fontSize: 24
  }
});

export default styles;
