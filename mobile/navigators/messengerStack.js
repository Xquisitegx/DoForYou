import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Messenger from "../pages/Messenger";
import ChatRoom from "../pages/ChatRoom";
import Profile from "../pages/Profile";

const StackNavigator = createNativeStackNavigator();
export default function MessengerStack() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Messenger" component={Messenger} />
      <StackNavigator.Screen name="ChatRoom" component={ChatRoom} options={{ headerShown: false }} />
      <StackNavigator.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}