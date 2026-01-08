import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Home } from './screens/HomeScreen';
import { Second } from './screens/SecondScreen';
import CustomNavigationBar from './components/NavigationBar';

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Second" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
	);
}
