import { CategoryButtonProps } from "./../../shared/CategoryButtonProps";
import styled from "styled-components/native";
import { Text as PaperText } from "react-native-paper";
import { TextProps } from "../../shared/TextProps";

export const CategoryButton = styled.TouchableOpacity<CategoryButtonProps>`
  ${({ flex }) => flex && `flex:  ${flex}`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
  ${({ margin }) => margin && `margin: ${margin}`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
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
