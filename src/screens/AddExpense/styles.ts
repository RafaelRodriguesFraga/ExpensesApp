import { TextProps } from "./../../shared/TextProps";
import { Button, TextInput, Text as PaperText } from "react-native-paper";
import styled from "styled-components/native";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${paperColor.white};
`;

export const DropdownContainer = styled.View`
  margin: 25px 16px 0 16px;
`;

export const InputContainer = styled.View`
  margin: 0 16px 0 16px;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled(TextInput)`
  margin-top: 20px;
  font-family: Inter_400Regular;
`;

export const CategoryInput = styled(TextInput)`
  font-family: Inter_400Regular;
  flex: 1;
`;

export const AddNewButton = styled(Button)`
  margin-top: 35px;
  background-color: ${paperColor.blue600};
`;

export const Text = styled(PaperText)<TextProps>`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px`};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform}`};
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`};
`;

export const CategoryButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const AddNewCategoryButton = styled(Button)`
  border-radius: 5px;
`;
