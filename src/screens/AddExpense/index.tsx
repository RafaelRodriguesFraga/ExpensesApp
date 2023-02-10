import React, { useState, useCallback, useRef } from "react";
import DropDown from "react-native-paper-dropdown";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import { Provider, TextInput, Text, Button } from "react-native-paper";
import * as S from "./styles";
import { Keyboard, FlatList, Image, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import HealthIcon from "../../assets/categoryIcons/Health.png";
import CommuteIcon from "../../assets/categoryIcons/Health.png";
import GroceryIcon from "../../assets/categoryIcons/Groceries.png";
import GiftsIcon from "../../assets/categoryIcons/Gifts.png";
import EletronicsIcon from "../../assets/categoryIcons/Electronics.png";
import LaundryIcon from "../../assets/categoryIcons/Laundry.png";
import LiquorIcon from "../../assets/categoryIcons/Liquor.png";
import RestaurantIcon from "../../assets/categoryIcons/Restaurant.png";
import CafeIcon from "../../assets/categoryIcons/Cafe.png";

const AddExpense = () => {
  const [categoryText, setCategoryText] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("expense");
  const [showDropDown, setShowDropDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["55%"];

  const openBottomSheet = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const typeList = [
    {
      label: "Income",
      value: "income",
    },
    {
      label: "Expense",
      value: "expense",
    },
  ];

  const categories = [
    {
      name: "Grocery",
      icon: GroceryIcon,
    },

    {
      name: "Gifts",
      icon: GiftsIcon,
    },

    {
      name: "Bar & Cafe",
      icon: CafeIcon,
    },

    {
      name: "Health",
      icon: HealthIcon,
    },

    {
      name: "Commute",
      icon: CommuteIcon,
    },

    {
      name: "Eletronics",
      icon: EletronicsIcon,
    },

    {
      name: "Laundry",
      icon: LaundryIcon,
    },

    {
      name: "Liquor",
      icon: LiquorIcon,
    },

    {
      name: "Restaurant",
      icon: RestaurantIcon,
    },
  ];
  return (
    <S.Container>
      <Provider>
        <S.DropdownContainer>
          <DropDown
            label="Type"
            mode="outlined"
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={type}
            setValue={setType}
            list={typeList}
            dropDownStyle={{ marginTop: -30, borderColor: paperColor.blue600 }}
            dropDownItemStyle={{ backgroundColor: paperColor.white }}
            dropDownItemSelectedStyle={{ backgroundColor: paperColor.white }}
            dropDownItemTextStyle={{ color: paperColor.black }}
            dropDownItemSelectedTextStyle={{
              color: paperColor.black,
              fontWeight: "bold",
            }}
            inputProps={{ right: <TextInput.Icon icon="chevron-down" /> }}
          />
        </S.DropdownContainer>
        <S.InputContainer>
          <S.Input
            label="Category Name"
            placeholder="Category Name"
            placeholderTextColor={paperColor.grey500}
            mode="outlined"
            onFocus={() => openBottomSheet(0)}
            onPressIn={Keyboard.dismiss}
            activeOutlineColor={paperColor.blue600}
            showSoftInputOnFocus={false}
          />

          <S.Input
            label="Enter amount"
            placeholder="Enter amount"
            placeholderTextColor={paperColor.grey500}
            mode="outlined"
            activeOutlineColor={paperColor.blue600}
          />
          <S.Input
            label="Description (optional)"
            placeholder="Description (optional)"
            placeholderTextColor={paperColor.grey500}
            mode="outlined"
            activeOutlineColor={paperColor.blue600}
          />

          <S.AddNewButton
            mode="contained"
            onPress={() => console.log("pressed")}
            labelStyle={{ letterSpacing: 0.75, fontFamily: "Inter_400Regular" }}
          >
            Add new {type}
          </S.AddNewButton>
        </S.InputContainer>
      </Provider>

      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose
        >
          <BottomSheetView>
            <S.Text
              alignSelf="center"
              marginTop={10}  
              fontFamily="Inter_400Regular"
              textTransform="uppercase"
              letterSpacing={1.5}
            >
              Choose Category
            </S.Text>

            <FlatList
              numColumns={3}
              data={categories}
              contentContainerStyle={{ marginTop: 15 }}
              renderItem={({ item }) => (
                //TODO  Change to another component
                <S.CategoryButton>
                  <Image source={item.icon} />
                  <S.Text marginTop={4}>{item.name}</S.Text>
                </S.CategoryButton>
              )}
            />

            <S.ButtonContainer>
              <Button
                mode="outlined"
                labelStyle={{
                  color: paperColor.blue600,
                  fontFamily: "Inter_400Regular",
                  fontWeight: "bold",
                }}
                style={{ borderRadius: 5 }}
              >
                Add new category
              </Button>
            </S.ButtonContainer>
          </BottomSheetView>
        </BottomSheet>
      )}
    </S.Container>
  );
};

export default AddExpense;
