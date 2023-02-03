import { View, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import GroceryIcon from "../../assets/categoryIcons/Groceries.png";
import HealthIcon from "../../assets/categoryIcons/Health.png";

type ListProps = {

}

const Home = () => {
  const expenses = [
    {
      date: '2023-02-02',
      items: [
        { name: 'Eggs & Veggies', cost: 500, category: "Groceries", categoryIcon: GroceryIcon },
        { name: 'Lunch', cost: 12.00 }
      ]
    },
    {
      date: '2023-02-01',
      items: [
        { name: 'Gas', cost: 25.00 },
        { name: 'Grocery', cost: 50.00 }
      ]
    }
  ];

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
          <S.IncomeText variant="bodyMedium">Income</S.IncomeText>
        </S.IncomeContainer>
      </S.CashflowContainer>
      <FlatList
      data={expenses}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 20, borderWidth: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.date}</Text>
          {item.items.map((expense) => (
            <Text key={expense.name}>
              {expense.name}: {expense.cost}
            </Text>
          ))}
        </View>
      )}
    />
      {/* <S.ButtonContainer>
        <S.AddNewButton
          mode="contained"
          icon="plus-circle"
          labelStyle={{fontSize: 18}}
          contentStyle={{justifyContent: 'center', alignItems: 'center'}}
        >
          Add New
        </S.AddNewButton>
      </S.ButtonContainer> */}
    </S.SafeAreaContainer>
  );
};

export default Home;
