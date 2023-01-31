import { View, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";

const Home = () => {
  return (
    <S.SafeAreaContainer>
      <S.CalendarContainer>
        <Text variant="bodyMedium">Calendário vem aqui</Text>
      </S.CalendarContainer>

      <S.CashflowContainer>
        <S.ExpensesContainer>
          <S.CasflowIcon name="cash-multiple" />
          <S.ExpensesValue>- 12,000</S.ExpensesValue>
          <S.ExpensesText variant="bodyMedium">Expenses</S.ExpensesText>
        </S.ExpensesContainer>

        <S.BalanceContainer>
          <S.CasflowIcon name="wallet-outline" />
          <S.BalanceValue>+ 48,000</S.BalanceValue>
          <S.BalanceText variant="bodyMedium">Balance</S.BalanceText>
        </S.BalanceContainer>

        <S.IncomeContainer>
          <S.CasflowIcon name="bank-outline" />
          <S.IncomeValue>70,000</S.IncomeValue>
          <S.ExpensesText variant="bodyMedium">Income</S.ExpensesText>
        </S.IncomeContainer>
      </S.CashflowContainer>

      <S.ButtonContainer>
        <S.AddNewButton
          mode="contained"
          icon="plus-circle"
          labelStyle={{fontSize: 18}}
          contentStyle={{justifyContent: 'center', alignItems: 'center'}}
        >
          Add New
        </S.AddNewButton>
      </S.ButtonContainer>
    </S.SafeAreaContainer>
  );
};

export default Home;
