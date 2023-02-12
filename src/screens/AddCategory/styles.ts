import { Button, IconButton, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${paperColor.white};
  align-items: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin: 16px;
`;

export const AddCategoryButton = styled(IconButton)`
  border-width: 2px;
  border-style: dashed;
  width: 48px;
  height: 48px;
  border-color: ${paperColor.blue600};
`;

export const Text = styled(TextInput)`
  flex: 1;
  margin-bottom: 10px;
  margin-left: 10px;
`;

// TODO PUT IN SEPARATED COMPONENT
export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const AddNewCategoryButton = styled(Button)`
  margin-left: 16px;
  margin-right: 16px;
  background-color: ${paperColor.blue600};

`;
