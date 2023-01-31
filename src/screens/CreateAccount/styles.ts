import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import styled from "styled-components/native";
import { Text, Button } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  background-color: ${paperColor.white};
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const LogoText = styled(Text)`
  color: ${paperColor.grey800};
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 44px;
`;

export const DescriptionTitle = styled(Text)`
  letter-spacing: 0.15px;
  color: ${paperColor.grey800};
`;

export const DescriptionText = styled(Text)`
  font-weight: 400px;
  letter-spacing: 0.25px;
  text-align: center;
  width: 312px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.View`
  margin-top: 50px;
  width: 75%;
`;

export const SigninButton = styled(Button)`
  border-radius: 4px;
  border-color: ${paperColor.grey400};
`;
