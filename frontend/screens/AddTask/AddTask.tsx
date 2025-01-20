import {Picker} from '@react-native-picker/picker'; // Dropdown-valikko tehtävän nimelle
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import styles from './style';
import Button from '../../components/Button/Button';
import style from './style';

export const AddTask = ({navigation}: any) => {
  const [taskName, setTaskName] = useState('');
  const [price, setPrice] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');
  const [address, setAddress] = useState('');

  const handleAddTask = () => {
    console.log('Task Name:', taskName);
    console.log('Price:', price);
    console.log('Time Estimate:', timeEstimate);
    console.log('Address:', address);
    // Tässä voisi olla logiikka tallentaa tehtävä tietokantaan tai API:hin
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={styles.container}>
        {/* Tehtävän nimi */}
        <Input
          label="Työn nimi"
          placeholder="Kirjoita työn nimi"
          value={taskName}
          onChangeText={setTaskName}
          style={style.input}
        />

        {/* Hintakorvaus */}
        <Input
          label="Hintakorvaus (€)"
          placeholder="Esim. 20"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={style.input}
        />

        {/* Aika-arvio */}
        <Input
          label="Aika-arvio (tunnit)"
          placeholder="Esim. 1.5"
          value={timeEstimate}
          onChangeText={setTimeEstimate}
          keyboardType="numeric"
          style={style.input}
        />

        {/* Osoite */}
        <Input
          label="Osoite"
          placeholder="Esim. Kauppakatu 10, Helsinki"
          value={address}
          onChangeText={setAddress}
          style={style.input}
        />

        <Button title="Lisää tehtävä" onPress={handleAddTask} />
      </View>
      <Picker />
    </SafeAreaView>
  );
};
