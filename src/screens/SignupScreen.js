import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import COLORS from '../utils/Colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import SocialButton from '../components/SocialButton';

const SignupScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);

    setTimeout(() => {
      auth()
        .createUserWithEmailAndPassword(inputs.email, inputs.password)
        .then(userCredentials => {
          const user = userCredentials.user;
          Alert.alert('Sukses', 'Registrasi Berhasil');
          navigation.navigate('Login');
        })
        .catch(error => alert(error.message));
    }, 2000);
  };

  const googleLogin = () => {
    setLoading(false);
    setTimeout(async () => {
      setLoading(true);

      try {
        const {idToken} = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            keyboardType="email-address"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />

          <Button title="Register" onPress={validate} />

          {Platform.OS === 'android' ? (
            <View>
              <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
              />
            </View>
          ) : null}

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.black,
                textAlign: 'center',
                fontFamily: 'Lato-Regular',
                marginTop: 20,
              }}>
              Already have account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
