import { Image, StyleSheet } from "react-native";
import { Text, Button, FAB } from "react-native-paper";
import * as S from "./styles";
import { FlatList } from "react-native-gesture-handler";
import GroceryIcon from "../../assets/categoryIcons/Groceries.png";
import HealthIcon from "../../assets/categoryIcons/Health.png";
import CafeIcon from "../../assets/categoryIcons/Cafe.png";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";

const Home = () => {
  const expenses = [
    {
      id: "1",
      date: "TODAY",
      total: -1125,
      items: [
        {
          id: "2",
          name: "Eggs & Veggies",
          cost: -500,
          category: "Groceries",
          categoryIcon: GroceryIcon,
        },
        { id: "3", name: "Health", cost: -352, categoryIcon: HealthIcon },
        {
          id: "4",
          name: "Hangouts with Sujay",
          cost: -352,
          category: "Bar & cafe",
          categoryIcon: CafeIcon,
        },
      ],
    },
    {
      id: "2",
      date: "TODAY",
      total: -1125,
      items: [
        {
          id: "5",
          name: "Eggs & Veggies",
          cost: -500,
          category: "Groceries",
          categoryIcon: GroceryIcon,
        },
        { id: "6", name: "Health", cost: -352, categoryIcon: HealthIcon },
        {
          id: "7",
          name: "Hangouts with Sujay",
          cost: -352,
          category: "Bar & cafe",
          categoryIcon: CafeIcon,
        },
      ],
    },
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <S.ExpensesListContainer>
            <S.DateContainer>
              <S.DateText>{item.date}</S.DateText>
              <S.TotalCostText>{item.total}</S.TotalCostText>
            </S.DateContainer>

            {item.items.map((expense) => (
              <>
                <S.ExpensesContent key={expense.id}>
                  <S.IconTitleContainer>
                    <Image source={expense.categoryIcon} />

                    <S.TitleSubtitleContainer>
                      <S.ExpensesTitle>{expense.name}</S.ExpensesTitle>
                      {expense.category && (
                        <S.CategoryTitle>{expense.category}</S.CategoryTitle>
                      )}
                    </S.TitleSubtitleContainer>
                  </S.IconTitleContainer>

                  <S.CostContainer>
                    <S.CostText>{expense.cost}</S.CostText>
                  </S.CostContainer>
                </S.ExpensesContent>
              </>
            ))}
          </S.ExpensesListContainer>
        )}
      />

      <S.FloatingActionButton
        icon="plus-circle"
        label="Add New"
        onPress={() => console.log("Pressed")}
        color={paperColor.white}
      />
    </S.SafeAreaContainer>
  );
};

export default Home;
