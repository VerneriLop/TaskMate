import {SafeAreaView} from 'react-native';
import React from 'react';
import globalStyle from '../assets/globalStyle';

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]} />
  );
};
