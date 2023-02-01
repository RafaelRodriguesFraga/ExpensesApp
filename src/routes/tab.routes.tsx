import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import Home from "../screens/Home";
import Report from "../screens/Report";
import Settings from "../screens/Settings";
import LogoImage from "../assets/logo.png";
import * as paperColor from "../../node_modules/react-native-paper/src/styles/themes/v2/colors";


const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          header: (props) => (
            <Header
              {...props}
              title="Kitty"
              logoImage={LogoImage}
              avatarText="M"
              hasSearchIcon
            />
          ),
        }}
      />
      <Screen
        name="Report"
        component={Report}
        options={{
          header: (props) => (
            <Header title="Statistics" hasSearchIcon hasMoreIcon {...props} />
          ),
        }}
      />
      <Screen name="Settings" component={Settings} options={{
          header: (props) => (
            <Header title="Settings" backgroundColor={paperColor.grey300} {...props} />
          ),
        }}/>
    </Navigator>
  );
};

export default TabRoutes;
