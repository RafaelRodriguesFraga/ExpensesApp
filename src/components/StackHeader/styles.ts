import { grey800 } from "react-native-paper/src/styles/themes/v2/colors";
import styled from "styled-components/native";
import { Text, Appbar, Avatar } from "react-native-paper";
import * as paperColor from "react-native-paper/src/styles/themes/v2/colors";

type HeaderProps = {
  backgroundColor?: string;
};

type AppBarContenProps = {
  fontFamily?: string;
};

export const AppbarHeader = styled(Appbar.Header)<HeaderProps>`
    padding: 16px;
    background-color: ${({ backgroundColor }) =>
      backgroundColor || paperColor.white}};

`;

export const LogoImage = styled.Image`
  width: 32px;
  height: 32px;
`;

export const AppbarContent = styled(Appbar.Content)`
  margin-left: 10px;
`;

export const AppbarAction = styled(Appbar.Action)``;

export const AvatarText = styled(Avatar.Text)`
  background-color: ${paperColor.grey200};
`;

export const IconsContainer = styled.View``;
