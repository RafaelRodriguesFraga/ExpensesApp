import { Text as PaperText, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { TextProps } from "../../shared/TextProps";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export const Container = styled.View``;

export const ProfileContainer = styled.View`
  background-color: ${paperColor.grey300};
  height: 100px;
  flex-direction: row;
  padding-left: 16px;
  align-items: center;
`;

export const AvatarText = styled(Avatar.Text)`
  background-color: ${paperColor.grey200};
`;

export const UserDataContainer = styled.View`
  margin-left: 15px;
`;

export const Text = styled(PaperText)<TextProps>`
  font-family: Inter_400Regular;
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px`};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
`;

export const SettingsContainer = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
    margin: 16px;
 
`;

export const BlankView = styled.View`
    flex: 1;
`;
export const RightIcon = styled(Icon)`
`