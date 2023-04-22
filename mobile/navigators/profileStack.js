import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AssignedTask from "../pages/AssignedTask";
import AssignedTasks from "../pages/AssignedTasks";
import CreatedTask from "../pages/CreatedTask";
import CreatedTasks from "../pages/CreatedTasks";
import ReceivedTask from "../pages/ReceivedTask";
import ReceivedTasks from "../pages/ReceivedTasks";
import Profile from "../pages/Profile";

const StackNavigator = createNativeStackNavigator();
export default function ProfileStack() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <StackNavigator.Screen name="CreatedTask" component={CreatedTask} options={{ headerShown: false }} />
      <StackNavigator.Screen name="CreatedTasks" component={CreatedTasks} options={{ headerShown: false }} />
      <StackNavigator.Screen name="ReceivedTask" component={ReceivedTask} options={{ headerShown: false }} />
      <StackNavigator.Screen name="ReceivedTasks" component={ReceivedTasks} options={{ headerShown: false }} />
      <StackNavigator.Screen name="AssignedTask" component={AssignedTask} options={{ headerShown: false }} />
      <StackNavigator.Screen name="AssignedTasks" component={AssignedTasks} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}