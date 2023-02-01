import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, Button } from "react-native-paper";

export const SafeAreaContainer = styled.View`
flex: 1;
  background-color: ${paperColor.white};
  align-items: center;
`;

export const CalendarContainer = styled.View`
  margin-top: 20px;
`;

export const CashflowContainer = styled.View`
  width: 85%;
  margin-top: 15px;
  border-color: ${paperColor.grey300};
  border-radius: 8px;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ExpensesContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const BalanceContainer = styled(ExpensesContainer)``;

export const IncomeContainer = styled(ExpensesContainer)``;

export const CasflowIcon = styled(Icon)`
  font-size: 30px;
  color: ${paperColor.black};
`;

export const ExpensesValue = styled(Text)`
  font-size: 20px;
  color: ${paperColor.red600};
  font-weight: bold;
  font-family: 'Inter_400Regular';
`;

export const BalanceValue = styled(Text)`
  font-size: 20px;
  color: ${paperColor.green600};
  font-weight: bold;
  font-family: 'Inter_400Regular';
`;

export const IncomeValue = styled(Text)`
  font-size: 20px;
  color: ${paperColor.black};
  font-weight: bold;
  font-family: 'Inter_400Regular';
`;

export const ExpensesText = styled(Text)`
  color: ${paperColor.grey700};
  font-family: 'Inter_400Regular';
`;

export const BalanceText = styled(Text)`
font-family: 'Inter_400Regular';
`;

export const IncomeText = styled(Text)`
font-family: 'Inter_400Regular';
`;

export const ButtonContainer = styled.View`
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 20px;
`;

export const AddNewButton = styled(Button)`
  background-color: ${paperColor.blue500};
  padding: 5px 2px;
  border-radius: 20px;
`;
