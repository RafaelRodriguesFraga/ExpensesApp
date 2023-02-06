import { Image } from "react-native";
import React from "react";
import * as S from "./styles";
import { Text, Button, FAB } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import TransportationIcon from "../../assets/categoryIcons/Transportation.png";
import HealthIcon from "../../assets/categoryIcons/Health.png";
import GroceryIcon from "../../assets/categoryIcons/Groceries.png";
import GiftsIcon from "../../assets/categoryIcons/Gifts.png";
import EletronicsIcon from "../../assets/categoryIcons/Electronics.png";
import CafeIcon from "../../assets/categoryIcons/Cafe.png";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";

const Report = () => {
  const data = [
    {
      id: 1,
      categoryIcon: TransportationIcon,
      name: "Transportation",
      totalTransactions: "32 transactions",
      totalCost: -5300,
      totalPercentage: "32%",
    },
    {
      id: 2,
      categoryIcon: HealthIcon,
      name: "Health",
      totalTransactions: "16 transactions",
      totalCost: -3100,
      totalPercentage: "16%",
    },
    {
      id: 3,
      categoryIcon: GroceryIcon,
      name: "Personal",
      totalTransactions: "12 transactions",
      totalCost: -2320,
      totalPercentage: "12%",
    },
    {
      id: 4,
      categoryIcon: GiftsIcon,
      name: "Gifts",
      totalTransactions: "12 transactions",
      totalCost: -1440,
      totalPercentage: "12%",
    },
    {
      id: 5,
      categoryIcon: EletronicsIcon,
      name: "Transportation",
      totalTransactions: "12 transactions",
      totalCost: -800,
      totalPercentage: "12%",
    },
    {
      id: 6,
      categoryIcon: CafeIcon,
      name: "Caffe & bar",
      totalTransactions: "12 transactions",
      totalCost: -240,
      totalPercentage: "12%",
    },
  ];

  return (
    <S.Container>
      <S.CalendarContainer>
        <Text variant="bodyMedium">Calendário vem aqui</Text>
      </S.CalendarContainer>

      <S.Text
        marginTop={12}
        fontFamily="Inter_400Regular"
        letterSpacing={1.25}
        textTransform="uppercase"
      >
        Overview
      </S.Text>
      <S.ChartContainer>
        <S.Transportation />
        <S.Health />
        <S.Personal />
        <S.Gifts />
        <S.Eletronics />
        <S.Caffe />
      </S.ChartContainer>

      <S.DetailsTextContainer>
        <S.Text
          marginTop={12}
          fontFamily="Inter_400Regular"
          letterSpacing={1.25}
          textTransform="uppercase"
        >
          Details
        </S.Text>
      </S.DetailsTextContainer>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <S.DetailsContainer key={item.id}>
            <S.IconTitleContainer>
              <Image source={item.categoryIcon} />

              <S.TitleSubtitleContainer>
                <S.Text fontFamily="Inter_700Bold" letterSpacing={0.25}>
                  {item.name}
                </S.Text>

                <S.Text color={paperColor.grey700}>
                  {item.totalTransactions}
                </S.Text>
              </S.TitleSubtitleContainer>
            </S.IconTitleContainer>

            <S.CostContainer>
              <S.Text color={paperColor.red600}>{item.totalCost}</S.Text>
              <S.Text color={paperColor.grey900} alignSelf="flex-end">
                {item.totalPercentage}
              </S.Text>
            </S.CostContainer>
          </S.DetailsContainer>
        )}
      />

      <S.FabContainer>
        <S.FloatingActionButton         
          icon="download"
          label="Download Report"
          color={paperColor.white}          
          onPress={() => console.log("Pressed")}
        />
      </S.FabContainer>
     
    </S.Container>
  );
};

export default Report;
