import { Text, Image, ImageSourcePropType, SafeAreaView } from "react-native";
import React, { ReactNode } from "react";
import * as S from "./styles";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Appbar, Avatar } from "react-native-paper";
import * as paperColor from "react-native-paper/src/styles/themes/v2/colors";

import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { StackHeaderProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title: string;
  logoImage?: ImageSourcePropType;
  backgroundColor?: string;
  avatarText?: string;
  hasSearchIcon?: boolean;
  hasMoreIcon?: boolean;
} & StackHeaderProps;

const StackHeader = (props: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <S.AppbarHeader backgroundColor={props.backgroundColor}>
      {props.logoImage && <S.LogoImage source={props.logoImage} />}

      <Appbar.BackAction onPress={handleGoBack} />
      <S.AppbarContent
        title={props.title}
        color={paperColor.grey800}
        titleStyle={{ letterSpacing: 0.15, fontFamily: "Inter_400Regular", fontSize: 20 }}
      />

      {props.hasSearchIcon && (
        <S.AppbarAction icon="magnify" size={32} onPress={() => {}} />
      )}

      {props.avatarText && (
        <S.AvatarText
          size={32}
          label={props.avatarText}
          labelStyle={{ color: paperColor.grey800, fontWeight: "bold" }}
        />
      )}

      {props.hasMoreIcon && (
        <S.AppbarAction icon="dots-vertical" size={32} onPress={() => {}} />
      )}
    </S.AppbarHeader>
  );
};

export default StackHeader;
