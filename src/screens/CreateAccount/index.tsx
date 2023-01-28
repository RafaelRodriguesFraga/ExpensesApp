import { View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import LogoImage from "../../assets/logo.png";
import { Text, Button } from "react-native-paper";
import { grey800 } from "react-native-paper/src/styles/themes/v2/colors";
import GoogleIcon from "../../assets/google.png";

const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} />
        <Text style={styles.logoText} variant="displayMedium">
          Kitty
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle} variant="headlineMedium">
          Create an account
        </Text>
        <Text style={styles.descriptionText} variant="bodyLarge">
          Get started by creating your account to secure your data & manage on
          multiple devices anytime!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}   
          icon='google'
          mode="outlined"
          textColor={grey800}
          onPress={() => {}}
        >       
          Sign up with Google
        </Button>
      </View>
    </View>
  );
};

export default CreateAccount;
