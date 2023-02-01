import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "../screens/CreateAccount";
import Home from "../screens/Home";
import TabRoutes from "./tab.routes";

const {Navigator, Screen} = createStackNavigator();

const StackRoutes = () => {
    return (
        <Navigator initialRouteName="TabRoutes" screenOptions={{headerShown: true}}>
            <Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false, headerTintColor: "red"}} />
            <Screen name="TabRoutes" component={TabRoutes} options={{headerShown: false}}/>
        </Navigator>
    )
}

export default StackRoutes;