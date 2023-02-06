import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, Button, FAB } from "react-native-paper";

export const SafeAreaContainer = styled.View`
  flex: 1;
  background-color: ${paperColor.white};
`;

export const CalendarContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const CashflowContainer = styled.View`
  margin-top: 15px;
  border-color: ${paperColor.grey300};
  border-radius: 8px;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
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
  font-family: "Inter_400Regular";
`;

export const BalanceValue = styled(Text)`
  font-size: 20px;
  color: ${paperColor.green600};
  font-weight: bold;
  font-family: "Inter_400Regular";
`;

export const IncomeValue = styled(Text)`
  font-size: 20px;
  color: ${paperColor.black};
  font-weight: bold;
  font-family: "Inter_400Regular";
`;

export const ExpensesText = styled(Text)`
  color: ${paperColor.grey700};
  font-family: "Inter_400Regular";
`;

export const BalanceText = styled(Text)`
  font-family: "Inter_400Regular";
`;

export const IncomeText = styled(Text)`
  font-family: "Inter_400Regular";
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

/* MOVE TO A SEPARATE COMPONENT */

export const ExpensesListContainer = styled.View`
  margin-top: 16px;
  border-color: ${paperColor.grey300};
  border-radius: 8px;
  border-width: 1px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  margin-bottom: 16px;
`;

export const DateContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const DateText = styled(Text)`
  font-family: Inter_400Regular;
  color: ${paperColor.grey800};
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const TotalCostText = styled(DateText)``;

export const ExpensesContent = styled.View`
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

export const ExpensesTitle = styled(Text)`
  font-family: Inter_700Bold;
  letter-spacing: 0.25px;
`;

export const CategoryTitle = styled(Text)`
  color: ${paperColor.grey700};
`;

export const CostContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CostText = styled(Text)`
  color: ${paperColor.red600};
`;

export const FloatingActionButton = styled(FAB)`
  background-color: ${paperColor.blue500};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 16px;
  border-radius: 44px;
 
`;
