import { Image } from "react-native";
import React from "react";
import * as S from "./styles";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native-gesture-handler";
import CategoryIcon from "../../assets/settingsIcons/category.png";
import PdfIcon from "../../assets/settingsIcons/pdf.png";
import LanguageIcon from "../../assets/settingsIcons/language.png";
import LogoutIcon from "../../assets/settingsIcons/logout.png";

const Settings = () => {
  const settingsOptions = [
    {
      icon: CategoryIcon,
      title: "Manage Categories",
      onPress: () => {},
    },

    {
      icon: PdfIcon,
      title: "Export to PDF",
      onPress: () => {},
    },

    {
      icon: LanguageIcon,
      title: "Choose Language",
      onPress: () => {},
    },

    {
      icon: LogoutIcon,
      title: "Logout",
      onPress: () => {},
    },
  ];

  return (
    <S.Container>
      <S.ProfileContainer>
        <S.AvatarText
          size={48}
          label="M"
          labelStyle={{ color: paperColor.grey800, fontWeight: "bold" }}
        />

        <S.UserDataContainer>
          <S.Text fontSize={16} letterSpacing={0.25} fontWeight="bold">
            John Doe
          </S.Text>
          <S.Text letterSpacing={0.4}>john.doe@gmail.com</S.Text>
        </S.UserDataContainer>
      </S.ProfileContainer>

      <FlatList
        data={settingsOptions}
        renderItem={({ item }) => (
          <S.SettingsContainer>
            <Image source={item.icon} />
            <S.Text marginLeft={6} fontSize={16}>{item.title}</S.Text>
            <S.BlankView /> 
            {item.title !== "Logout" && <Icon name="chevron-right" size={24} color={paperColor.grey500}/>}
          </S.SettingsContainer>
        )}
      />
    </S.Container>
  );
};

export default Settings;
