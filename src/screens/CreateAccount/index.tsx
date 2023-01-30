import { View, Image } from "react-native";
import React from "react";
import * as S from "./styles";
import LogoImage from "../../assets/logo.png";
import { Text, Button } from "react-native-paper";
import { grey800 } from "react-native-paper/src/styles/themes/v2/colors";

const CreateAccount = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Image source={LogoImage} />
        <S.LogoText variant="displayMedium">
          Kitty
        </S.LogoText>
      </S.LogoContainer>

      <S.DescriptionContainer>
        <S.DescriptionTitle variant="headlineMedium">
          Create an account
        </S.DescriptionTitle>
        <S.DescriptionText variant="bodyLarge">
          Get started by creating your account to secure your data & manage on
          multiple devices anytime!
        </S.DescriptionText>
      </S.DescriptionContainer>

      <S.ButtonContainer>
        <S.SigninButton        
          contentStyle={{justifyContent: 'center', alignItems: 'center'}}
          icon='google'
          mode="outlined"
          textColor={grey800}
          onPress={() => {}}
        >       
          Sign up with Google
        </S.SigninButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default CreateAccount;
