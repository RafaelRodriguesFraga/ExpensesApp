import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "../screens/CreateAccount";

const {Navigator, Screen} = createStackNavigator();

const StackRoutes = () => {
    return (
        <Navigator initialRouteName="CreateAccount" screenOptions={{headerShown: false}}>
            <Screen name="CreateAccount" component={CreateAccount} />
        </Navigator>
    )
}

export default StackRoutes;