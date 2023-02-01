import { View, Text } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as S from "./styles";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const handleNavigateToTab = (tabName: string) => {
    navigation.navigate(tabName);
  };
  return (
    <S.TabContainer>
      <S.TabItem onPress={() => handleNavigateToTab("Home")}>
        <Icon name={state.index === 0 ? "home" : "home-outline"} size={24} />
        <S.TabText>Home</S.TabText>
      </S.TabItem>

      <S.TabItem onPress={() => handleNavigateToTab("Report")}>
        <Icon
          name={state.index === 1 ? "chart-box" : "chart-box-outline"}
          size={24}
        />
        <S.TabText>Report</S.TabText>
      </S.TabItem>

      <S.TabItem onPress={() => handleNavigateToTab("Settings")}>
        <Icon name={state.index=== 2 ? "cog" : "cog-outline"} size={24} />
        <S.TabText>Settings</S.TabText>
      </S.TabItem>
    </S.TabContainer>
  );
};

export default TabBar;
