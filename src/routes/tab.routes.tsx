import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import Home from "../screens/Home";
import Report from "../screens/Report";
import Settings from "../screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Report" component={Report} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};

export default TabRoutes;
