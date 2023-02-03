import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SplashScreen from '../screens/SplashScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '676868436279-mdbuistd1mje071498n3et30qlc3nmok.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    // routeName = 'Login';
    routeName = 'Splash';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => {
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>;
          },
        })}
      />
    </Stack.Navigator>
  );
};

//   return (
//     <NavigationContainer>
//       <AppStack.Navigator screenOptions={{headerShown: false}}>
//         <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
//         <AppStack.Screen name="Login" component={LoginScreen} />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   );
export default AuthStack;
