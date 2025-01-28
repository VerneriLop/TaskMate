import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, SafeAreaView} from 'react-native';
import Input from '../../components/Input/Input'; // Oletan että käytät omaa Input-komponenttia
import Button from '../../components/Button/Button'; // Oletan että käytät omaa Button-komponenttia
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // Tarkistetaan, että kaikki kentät ovat täytetty
    if (!email || !password || !confirmPassword) {
      Alert.alert('Virhe', 'Täytä kaikki kentät');
      return;
    }

    // Tarkistetaan, että salasanat täsmäävät
    if (password !== confirmPassword) {
      Alert.alert('Virhe', 'Salasanat eivät täsmää');
      return;
    }

    try {
      // Lähetetään rekisteröintitiedot palvelimelle
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();
      if (response.ok) {
        // Rekisteröinti onnistui, siirrytään kirjautumissivulle
        Alert.alert('Onnistui', 'Käyttäjä luotu');
        navigation.navigate('Login');
      } else {
        // Virhe rekisteröinnissä
        Alert.alert('Virhe', data.error || 'Tuntematon virhe');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Virhe', 'Jotain meni pieleen.');
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.container}>
        <Text style={style.title}>Rekisteröidy</Text>

        <Input
          label="Sähköposti"
          placeholder="Esim. sähköposti@esimerkki.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          label="Salasana"
          placeholder="Salasana"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          label="Vahvista salasana"
          placeholder="Vahvista salasana"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Button title="Rekisteröidy" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
