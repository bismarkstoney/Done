import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    paddingLeft: Platform.OS === 'ios' ? 15 : 5,
  },
  view: {
    flex: 1,
  },
});
