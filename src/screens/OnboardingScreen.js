import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import {Button} from '@rneui/themed';

const Skip = ({...props}) => <Button title="Lewati" {...props} type="clear" />;
const Next = ({...props}) => <Button title="Lanjut" type="clear" {...props} />;
const Done = ({...props}) => <Button title="Selesai" type="clear" {...props} />;

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../assets/images/onboarding1.png')}
              style={styles.onboardImages}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiperaaa',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/images/onboarding1.png')}
              style={styles.onboardImages}
            />
          ),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/images/onboarding1.png')}
              style={styles.onboardImages}
            />
          ),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  onboardImages: {
    width: 250,
    height: 250,
  },
  onboardBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 5,
    height: 40,
    borderWidth: 10,
    borderColor: 'green',
  },
});
