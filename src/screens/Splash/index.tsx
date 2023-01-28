import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { useTheme } from 'react-native-paper';
import styles from "./styles";

const Splash = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  )
}




export default Splash;