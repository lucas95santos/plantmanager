import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
// styles
import styles from './styles';
// images
import wateringImg from '../../assets/watering.png';
// icons
import { Feather } from '@expo/vector-icons';

export const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeading}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.textFooter}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.advanceButton} activeOpacity={0.7}>
        <Feather name="chevron-right" style={styles.advanceButtonIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
