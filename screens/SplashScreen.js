import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import AppStack from '../navigation/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  //   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    // AsyncStorage.getItem('alreadyLaunched').then(value => {
    //   if (value == null) {
    //     AsyncStorage.setItem('alreadyLaunched', 'true');
    //     setIsFirstLaunch(true);
    //   } else {
    //     setIsFirstLaunch(false);
    //   }
    // });
    const unsubscribe = auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          // navigation.replace('Home');
          <AppStack />;
        } else {
          navigation.replace('Onboarding');
          //   navigation.replace('Login');
        }
      }, 3000);
    });

    // if (isFirstLaunch === null) {
    //   return null;
    // } else if (isFirstLaunch === true) {
    //   routeName = 'Onboarding';
    // } else {
    //   routeName = 'Login';
    // }

    return unsubscribe;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/onboarding1.png')}
        style={styles.images}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A4EC5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 274,
    height: 342,
  },
});
