import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'

import MainStack from "./navigators/mainStack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}