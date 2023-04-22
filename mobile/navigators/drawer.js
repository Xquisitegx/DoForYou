import { createDrawerNavigator } from "@react-navigation/drawer";

import FindTasks from "../pages/FindTasks";
import MainAfterLogin from "../pages/MainAfterLogin";

import ProfileStack from "./profileStack";
import MessengerStack from "./messengerStack";
import FindTaskStack from "./findTaskStack"

const DrawerNavigator = createDrawerNavigator();
export default function Drawer() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Main" component={MainAfterLogin} />
      <DrawerNavigator.Screen name="Profile" component={ProfileStack} />
      <DrawerNavigator.Screen name="FindTasks" component={FindTaskStack} options={{ headerShown: false }}/>
      <DrawerNavigator.Screen name="Messenger" component={MessengerStack} />
    </DrawerNavigator.Navigator>
  )
}