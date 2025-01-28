import {SafeAreaView} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

export const HomeScreen = ({navigation}: any): JSX.Element => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Button
        title="Lisää uusi tehtävä +"
        onPress={() => navigation.navigate(Routes.AddTask)} // Navigointi AddTask-näkymään
      />
    </SafeAreaView>
  );
};
