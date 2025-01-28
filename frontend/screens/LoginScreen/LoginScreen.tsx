import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/slices/userSlice'; // Importoi loginUser action
import {Alert} from 'react-native';
import Input from '../../components/Input/Input'; // Omat Input-komponentit
import Button from '../../components/Button/Button'; // Omat Button-komponentit
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';

export const LoginScreen = ({navigation}: any): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Tarkistetaan, että kentät eivät ole tyhjiä
    if (!email || !password) {
      Alert.alert('Virhe', 'Täytä kaikki kentät');
      return;
    }

    // Lähetetään kirjautumistietoja palvelimelle
    // Oletetaan, että tämä pyyntö on tehty ja saamme oikean vastauksen (käyttäjän tiedot ja token)
    const user = {id: '123', email: email}; // Tällä hetkellä vain mock-tyyppinen tieto
    const token = 'mock-jwt-token'; // Tässä tulee oikeasti serveriltä saatu token

    // Dispatchataan käyttäjä kirjautuneeksi Reduxiin
    dispatch(loginUser({user, token}));
    //navigation.navigate(Routes.Home); tämä piti poistaa koska valitti muuten navigointilogiikka on jo homesivulle MainNavigationissa
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.container}>
        <Text style={style.title}>Kirjaudu sisään</Text>

        <Input
          label="Sähköposti"
          placeholder="Sähköposti"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={style.input}
        />

        <Input
          label="Salasana"
          placeholder="Salasana"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={style.input}
        />

        <Button title="Kirjaudu sisään" onPress={handleLogin} />

        <TouchableOpacity onPress={() => navigation.navigate(Routes.Register)}>
          <Text style={style.registerLink}>Ei tiliä? Luo käyttäjä</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
