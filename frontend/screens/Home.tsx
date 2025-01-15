import {SafeAreaView} from 'react-native';
import React from 'react';
import globalStyle from '../assets/styles/globalStyle';
import Button from '../components/Button/Button';

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Button title={'Add task'} />
    </SafeAreaView>
  );
};
