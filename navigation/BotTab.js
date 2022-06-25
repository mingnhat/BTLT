import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Projects, Home,Transaction, Account } from "../screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const uiBottomList = [
  { isSelected: false, 
    iconName: "home", 
    useName: "Home", 
    componentName: Home
  },
 
  {
    isSelected: true,
    iconName: "plus-circle",
    useName: "Add",
    componentName: Projects,
  },
  {
    isSelected: false,
    iconName: "account",
    useName: "Account",
    componentName: Account,
  },
];

export default function BotTab() {
  const screenOptions = () => ({
    headerShown: false,
    tabBarActiveTintColor: "red",
    tabBarInactiveTintColor: "#fff5",
    tabBarActiveBackgroundColor: "white",
    tabBarInactiveBackgroundColor: "black",
  });
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      {uiBottomList.map((each, index) => (
        <Tab.Screen
          key={index}
          screenOptions={screenOptions}
          name={each.useName}
          component={each.componentName}
          options={{
            tabBarLabel: each.useName,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={each.iconName}
                color={color}
                size={size}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
