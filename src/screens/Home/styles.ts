import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "react-native-paper";

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background=color: ${paperColor.white},
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
`;

export const BalanceValue = styled(Text)`
  font-size: 20px;
  color: ${paperColor.green600};
  font-weight: bold;
`;

export const IncomeValue = styled(Text)`
  font-size: 20px;
  color: ${paperColor.black};
  font-weight: bold;
`;

export const ExpensesText = styled(Text)`
  color: ${paperColor.grey700};
`;

export const BalanceText = styled(Text)``;

export const IncomeText = styled(Text)``;
