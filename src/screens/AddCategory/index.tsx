import { View, Text, FlatList, Image } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import * as S from "./styles";
import * as Icon from "../../shared/Icons";

import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CategoryList from "../../components/CategoryList";

const AddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["55%"];

  const openBottomSheet = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const handleChooseIcon = (id: number) => {
    console.log(`Chose icon id number ${id}`);
    setIsOpen(false);
  };

  const categories = [
    {
      id: 1,
      icon: Icon.GroceryIcon,
    },

    {
      id: 2,
      icon: Icon.CafeIcon,
    },

    {
      id: 3,
      icon: Icon.ElectronicsIcon,
    },

    {
      id: 4,
      icon: Icon.GiftsIcon,
    },

    {
      id: 5,
      icon: Icon.LaundryIcon,
    },

    {
      id: 6,
      icon: Icon.PartyIcon,
    },

    {
      id: 7,
      icon: Icon.LiquorIcon,
    },

    {
      id: 8,
      icon: Icon.FuelIcon,
    },

    {
      id: 9,
      icon: Icon.MaintenanceIcon,
    },

    {
      id: 10,
      icon: Icon.EducationIcon,
    },

    {
      id: 11,
      icon: Icon.SelfDevelopmentIcon,
    },

    {
      id: 12,
      icon: Icon.MoneyIcon,
    },

    {
      id: 13,
      icon: Icon.HealthIcon,
    },

    {
      id: 14,
      icon: Icon.TransportationIcon,
    },

    {
      id: 15,
      icon: Icon.RestaurantIcon,
    },

    {
      id: 16,
      icon: Icon.SportIcon,
    },

    {
      id: 17,
      icon: Icon.SavingsIcon,
    },

    {
      id: 18,
      icon: Icon.InstituteIcon,
    },

    {
      id: 19,
      icon: Icon.DonateIcon,
    },
  ];

  return (
    <S.Container>
      <S.InputContainer>
        <S.AddCategoryButton
          icon="plus-circle"
          size={28}
          onPress={() => openBottomSheet(0)}
        />
        <S.TextInput
          label="Category Name"
          placeholder="Category Name"
          placeholderTextColor={paperColor.grey500}
          mode="outlined"
          activeOutlineColor={paperColor.blue600}
        />
      </S.InputContainer>

      <S.ButtonContainer>
        <S.AddNewCategoryButton
          mode="contained"
          labelStyle={{
            color: paperColor.white,
            fontFamily: "Inter_400Regular",
            fontWeight: "bold",
          }}
          onPress={() => {}}
        >
          Add new category
        </S.AddNewCategoryButton>
      </S.ButtonContainer>

      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose
        >
          <BottomSheetView>
            <S.Text>Choose Category Icon</S.Text>

            <FlatList
              numColumns={4}
              data={categories}
              contentContainerStyle={{
                marginTop: 15,
                alignSelf: "center",
              }}
              renderItem={({ item }) => (              
                <CategoryList icon={item.icon} handleChooseIcon={() => handleChooseIcon(item.id)} />
              )}
            />
          </BottomSheetView>
        </BottomSheet>
      )}
    </S.Container>
  );
};

export default AddCategory;
