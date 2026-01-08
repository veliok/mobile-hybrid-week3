import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'Second'>;

export function Second({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 20,
  },
});
