import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {};
// const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

// useEffect(() => {
//   AsyncStorage.getItem('alreadyLaunched').then(value => {
//     if (value == null) {
//       AsyncStorage.setItem('alreadyLaunched', 'true');
//       setIsFirstLaunch(true);
//     } else {
//       setIsFirstLaunch(false);
//     }
//   });
// }, []);

// if (isFirstLaunch === null) {
//   return null;
// } else if (isFirstLaunch === true) {
//   return (
//     <NavigationContainer>
//       <AppStack.Navigator screenOptions={{headerShown: false}}>
//         <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
//         <AppStack.Screen name="Login" component={LoginScreen} />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   );
// } else {
//   return <LoginScreen />;
// }

//   return (
//     <NavigationContainer>
//       <AppStack.Navigator screenOptions={{headerShown: false}}>
//         <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
//         <AppStack.Screen name="Login" component={LoginScreen} />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   );
