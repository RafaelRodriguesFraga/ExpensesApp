import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "../screens/CreateAccount";
import Home from "../screens/Home";

const {Navigator, Screen} = createStackNavigator();

const StackRoutes = () => {
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
            <Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false, headerTintColor: "red"}} />
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}

export default StackRoutes;