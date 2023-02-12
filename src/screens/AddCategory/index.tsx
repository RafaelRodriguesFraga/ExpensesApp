import { View, Text } from "react-native";
import React from "react";
import * as S from "./styles";
import { Button, IconButton } from "react-native-paper";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";

const AddCategory = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <S.AddCategoryButton icon="plus-circle" size={28} onPress={() => {}} />
        <S.Text
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
    </S.Container>
  );
};

export default AddCategory;
