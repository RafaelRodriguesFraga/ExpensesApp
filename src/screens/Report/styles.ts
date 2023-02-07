import styled from "styled-components/native";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import { Text as PaperText, FAB } from "react-native-paper";
import { TextProps } from "../../shared/TextProps";

export const Container = styled.View`
  flex: 1;
  background-color: ${paperColor.white};
  padding-left: 16px;
  padding-right: 16px;
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

export const CalendarContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const TitleText = styled(PaperText)`
  margin-top: 12px;
  font-family: Inter_400Regular;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const ChartContainer = styled.View`
  height: 36px;
  margin-top: 5px;
  flex-direction: row;
`;

export const Transportation = styled.View`
  background-color: ${paperColor.cyan100};
  width: 36%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Health = styled.View`
  background-color: ${paperColor.pink100};
  width: 16%;
`;

export const Personal = styled.View`
  background-color: ${paperColor.green100};
  width: 12%;
`;

export const Gifts = styled.View`
  background-color: ${paperColor.purple100};
  width: 12%;
`;

export const Eletronics = styled.View`
  background-color: ${paperColor.red100};
  width: 12%;
`;

export const Caffe = styled.View`
  background-color: ${paperColor.yellow100};
  width: 12%;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const DetailsTextContainer = styled.View`
  margin-top: 10px;
`;

/* MOVE TO A SEPARATE COMPONENT */

export const DateContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const IconTitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleSubtitleContainer = styled.View`
  margin-left: 10px;
`;

export const CostContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FabContainer = styled.View`
flex: 1;
 justify-content: flex-end; 
 align-items: center;
`;

export const FloatingActionButton = styled(FAB)`
  background-color: ${paperColor.blue500};
  border-radius: 44px;
  margin-bottom: 30px;
`;
