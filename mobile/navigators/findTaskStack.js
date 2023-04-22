import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FindTasks from "../pages/FindTasks";
import AssignedTask from "../pages/AssignedTask";

const StackNavigator = createNativeStackNavigator();
export default function MessengerStack() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="FindTasks" component={FindTasks} options={{ headerShown: false }}/>
      <StackNavigator.Screen name="AssignedTask" component={AssignedTask} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}