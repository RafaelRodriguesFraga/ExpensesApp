import { View, Text, Image, ImageSourcePropType } from "react-native";
import React, { ReactNode } from "react";
import * as S from "./styles";

type CategoryListProps = {
  id?: number;
  icon: ImageSourcePropType | undefined;
  name?: string;
  handleChooseIcon: (id?: number) => void;
};

const CategoryList = ({
  id,
  icon,
  name,
  handleChooseIcon,
}: CategoryListProps) => {
  return (
    <>
      {name ? (
        <S.CategoryButton
          flex={1}
          justifyContent="center"
          alignItems="center"
          margin="15px 0 0 0"
          onPress={() => handleChooseIcon(id)}
        >
          <Image source={icon} />
          <S.Text marginTop={4}>{name}</S.Text>
        </S.CategoryButton>
      ) : (
        <S.CategoryButton
          justifyContent="center"
          alignItems="flex-start"
          margin="12px 26px 12px; 26px"
          onPress={() => handleChooseIcon(id)}
        >
          <Image source={icon} />
        </S.CategoryButton>
      )}
    </>
  );
};

export default CategoryList;
