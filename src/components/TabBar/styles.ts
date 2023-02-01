import styled from "styled-components/native";
import { Text } from "react-native-paper";
import * as paperColor from "./../../../node_modules/react-native-paper/src/styles/themes/v2/colors";


export const TabContainer = styled.View`
    height: 62px;
    flex-direction: row;
    background-color: ${paperColor.white};
    border-top-width: 1px;
    border-top-color: ${paperColor.grey300};
    justify-content: space-evenly;
    align-items: center;
`;

export const TabItem = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const TabText = styled(Text)`
    color: ${paperColor.grey900};
    font-family: Inter_400Regular;
    line-height: 16px;
    letter-spacing: 0.4px;
`

