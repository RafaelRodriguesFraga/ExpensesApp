import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";
import StackHeader from "../components/StackHeader";
import AddExpense from "../screens/AddExpense";
import CreateAccount from "../screens/CreateAccount";
import Home from "../screens/Home";
import TabRoutes from "./tab.routes";
import * as paperColor from "../../node_modules/react-native-paper/src/styles/themes/v2/colors";
import AddCategory from "../screens/AddCategory";

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="AddCategory"
      screenOptions={{ headerShown: true }}
    >
      <Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false, headerTintColor: "red" }}
      />
      <Screen
        name="AddNew"
        component={AddExpense}
        options={{
          header: (props) => (
            <StackHeader
              title="Add New"
              backgroundColor={paperColor.grey200}
              {...props}
            />
          ),
        }}
      />
      <Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />

      <Screen
        name="AddCategory"
        component={AddCategory}
        options={{
          header: (props) => (
            <StackHeader
              title="Add new category"
              backgroundColor={paperColor.grey200}
              {...props}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default StackRoutes;
