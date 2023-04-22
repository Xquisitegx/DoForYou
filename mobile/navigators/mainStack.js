import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../pages/Login';
import MainBeforeLogin from "../pages/MainBeforeLogin";
import Register from "../pages/Register";

import Drawer from "./drawer";

const StackNavigator = createNativeStackNavigator();
export default function MainStack() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="MainBeforeLogin" component={MainBeforeLogin} options={{ headerShown: false }} />
      <StackNavigator.Screen name="Register" component={Register} />
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  );
}