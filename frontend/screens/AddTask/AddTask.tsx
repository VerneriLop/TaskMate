import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

export const AddTask = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Text>Lisätään uusi taski</Text>
    </SafeAreaView>
  );
};
